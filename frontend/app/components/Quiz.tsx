'use client';

import { QuizQuestion } from '../page';
import QuestionCard from './QuestionCard';

interface QuizProps {
  questions: QuizQuestion[];
  answers: Record<string | number, string | number | number[]>;
  onAnswerChange: (questionId: string | number, value: string | number | number[]) => void;
}

export default function Quiz({ questions, answers, onAnswerChange }: QuizProps) {
  return (
    <div className="space-y-6">
      {questions.map((question, index) => (
        <QuestionCard
          key={question.id}
          question={question}
          questionNumber={index + 1}
          value={answers[question.id]}
          onChange={(value) => onAnswerChange(question.id, value)}
        />
      ))}
    </div>
  );
}

