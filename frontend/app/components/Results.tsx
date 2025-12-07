'use client';

import { GradingResult, QuizQuestion } from '../page';

interface ResultsProps {
  results: GradingResult;
  questions: QuizQuestion[];
  answers: Record<string | number, string | number | number[]>;
  onReset: () => void;
}

export default function Results({
  results,
  questions,
  answers,
  onReset,
}: ResultsProps) {
  const percentage = Math.round((results.score / results.total) * 100);
  const isPassing = percentage >= 70;

  const getQuestionById = (id: string | number) => {
    return questions.find((q) => q.id === id);
  };

  const getResultById = (id: string | number) => {
    return results.results.find((r) => r.id === id);
  };

  const formatAnswer = (question: QuizQuestion, answer: string | number | number[]) => {
    if (question.type === 'text') {
      return answer as string;
    }
    if (question.type === 'radio' && typeof answer === 'number' && question.choices) {
      return question.choices[answer];
    }
    if (question.type === 'checkbox' && Array.isArray(answer) && question.choices) {
      return answer.map((idx) => question.choices![idx]).join(', ');
    }
    return String(answer);
  };

  const getCorrectAnswer = (question: QuizQuestion) => {
    if (question.type === 'text' && question.correctText) {
      return question.correctText;
    }
    if (question.type === 'radio' && typeof question.correctIndex === 'number' && question.choices) {
      return question.choices[question.correctIndex];
    }
    if (question.type === 'checkbox' && question.correctIndexes && question.choices) {
      return question.correctIndexes.map((idx) => question.choices![idx]).join(', ');
    }
    return 'N/A';
  };

  return (
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="bg-white rounded-lg shadow-xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Quiz Results</h1>
          <div className={`inline-block px-6 py-3 rounded-full text-2xl font-bold ${
            isPassing
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}>
            {results.score} / {results.total} ({percentage}%)
          </div>
          <p className={`mt-4 text-lg font-semibold ${
            isPassing ? 'text-green-700' : 'text-red-700'
          }`}>
            {isPassing ? '🎉 Congratulations! You passed!' : 'Keep practicing!'}
          </p>
        </div>

        <div className="space-y-6 mb-8">
          {questions.map((question, index) => {
            const result = getResultById(question.id);
            const answer = answers[question.id];
            const isCorrect = result?.correct ?? false;

            return (
              <div
                key={question.id}
                className={`border-2 rounded-lg p-6 ${
                  isCorrect
                    ? 'border-green-300 bg-green-50'
                    : 'border-red-300 bg-red-50'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Question {index + 1}: {question.question}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      isCorrect
                        ? 'bg-green-200 text-green-800'
                        : 'bg-red-200 text-red-800'
                    }`}
                  >
                    {isCorrect ? '✓ Correct' : '✗ Incorrect'}
                  </span>
                </div>

                <div className="space-y-2">
                  <div>
                    <span className="font-semibold text-gray-700">Your Answer: </span>
                    <span className="text-gray-600">
                      {answer !== undefined ? formatAnswer(question, answer) : 'No answer provided'}
                    </span>
                  </div>
                  {!isCorrect && (
                    <div>
                      <span className="font-semibold text-gray-700">Correct Answer: </span>
                      <span className="text-gray-600">{getCorrectAnswer(question)}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button
            onClick={onReset}
            className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
          >
            Take Quiz Again
          </button>
        </div>
      </div>
    </div>
  );
}

