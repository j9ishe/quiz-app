'use client';

import { useState } from 'react';
import { QuizQuestion } from '../page';

interface QuestionCardProps {
  question: QuizQuestion;
  questionNumber: number;
  value?: string | number | number[];
  onChange: (value: string | number | number[]) => void;
}

export default function QuestionCard({
  question,
  questionNumber,
  value,
  onChange,
}: QuestionCardProps) {
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleRadioChange = (index: number) => {
    onChange(index);
  };

  const handleCheckboxChange = (index: number, checked: boolean) => {
    const currentValue = (value as number[]) || [];
    if (checked) {
      onChange([...currentValue, index]);
    } else {
      onChange(currentValue.filter((i) => i !== index));
    }
  };

  return (
    <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">
        Question {questionNumber}: {question.question}
      </h3>

      {question.type === 'text' && (
        <div>
          <input
            type="text"
            value={(value as string) || ''}
            onChange={handleTextChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
            placeholder="Type your answer here..."
          />
        </div>
      )}

      {question.type === 'radio' && question.choices && (
        <div className="space-y-3">
          {question.choices.map((choice, index) => (
            <label
              key={index}
              className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <input
                type="radio"
                name={`question-${question.id}`}
                value={index}
                checked={value === index}
                onChange={() => handleRadioChange(index)}
                className="w-4 h-4 text-indigo-600 focus:ring-indigo-500 focus:ring-2"
              />
              <span className="ml-3 text-gray-700">{choice}</span>
            </label>
          ))}
        </div>
      )}

      {question.type === 'checkbox' && question.choices && (
        <div className="space-y-3">
          {question.choices.map((choice, index) => {
            const checked = Array.isArray(value) && (value as number[]).includes(index);
            return (
              <label
                key={index}
                className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={(e) => handleCheckboxChange(index, e.target.checked)}
                  className="w-4 h-4 text-indigo-600 focus:ring-indigo-500 focus:ring-2 rounded"
                />
                <span className="ml-3 text-gray-700">{choice}</span>
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
}

