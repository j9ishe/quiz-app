import { QuizQuestion } from '../data/quizData';

export interface Answer {
  id: string | number;
  value: string | number | number[];
}

export interface GradingResult {
  score: number;
  total: number;
  results: Array<{
    id: string | number;
    correct: boolean;
  }>;
}

export function gradeQuiz(
  answers: Answer[],
  questions: QuizQuestion[]
): GradingResult {
  const results: Array<{ id: string | number; correct: boolean }> = [];
  let score = 0;

  // Create a map of questions by ID for quick lookup
  const questionMap = new Map<string | number, QuizQuestion>();
  questions.forEach((q) => {
    questionMap.set(q.id, q);
  });

  // Grade each answer
  answers.forEach((answer) => {
    const question = questionMap.get(answer.id);
    
    if (!question) {
      // Question not found, mark as incorrect
      results.push({ id: answer.id, correct: false });
      return;
    }

    let isCorrect = false;

    switch (question.type) {
      case 'radio':
        // For radio, value should be the index
        if (typeof question.correctIndex === 'number' && answer.value === question.correctIndex) {
          isCorrect = true;
        }
        break;

      case 'checkbox':
        // For checkbox, value should be an array of indices
        if (
          Array.isArray(answer.value) &&
          Array.isArray(question.correctIndexes) &&
          answer.value.length === question.correctIndexes.length &&
          answer.value.every((val) => question.correctIndexes!.includes(val as number))
        ) {
          // Check if arrays contain the same elements (order doesn't matter)
          const sortedAnswer = [...(answer.value as number[])].sort((a, b) => a - b);
          const sortedCorrect = [...question.correctIndexes].sort((a, b) => a - b);
          isCorrect = JSON.stringify(sortedAnswer) === JSON.stringify(sortedCorrect);
        }
        break;

      case 'text':
        // For text, compare case-insensitively and trim whitespace
        if (
          question.correctText &&
          typeof answer.value === 'string' &&
          answer.value.trim().toLowerCase() === question.correctText.trim().toLowerCase()
        ) {
          isCorrect = true;
        }
        break;
    }

    if (isCorrect) {
      score++;
    }

    results.push({ id: answer.id, correct: isCorrect });
  });

  return {
    score,
    total: questions.length,
    results,
  };
}

