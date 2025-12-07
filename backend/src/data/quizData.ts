export interface QuizQuestion {
  id: string | number;
  type: 'text' | 'checkbox' | 'radio';
  question: string;
  choices?: string[];
  correctIndex?: number;
  correctIndexes?: number[];
  correctText?: string;
}

export const quizData: QuizQuestion[] = [
  {
    id: 1,
    type: 'radio',
    question: 'What is the capital of France?',
    choices: ['London', 'Berlin', 'Paris', 'Madrid'],
    correctIndex: 2,
  },
  {
    id: 2,
    type: 'checkbox',
    question: 'Which of the following are programming languages? (Select all that apply)',
    choices: ['JavaScript', 'HTML', 'Python', 'CSS'],
    correctIndexes: [0, 2],
  },
  {
    id: 3,
    type: 'text',
    question: 'What does CPU stand for?',
    correctText: 'Central Processing Unit',
  },
  {
    id: 4,
    type: 'radio',
    question: 'Which HTTP method is used to create a new resource?',
    choices: ['GET', 'POST', 'PUT', 'DELETE'],
    correctIndex: 1,
  },
  {
    id: 5,
    type: 'checkbox',
    question: 'Which of these are JavaScript frameworks? (Select all that apply)',
    choices: ['React', 'Vue', 'Angular', 'Django'],
    correctIndexes: [0, 1, 2],
  },
  {
    id: 6,
    type: 'text',
    question: 'What is the main purpose of CSS?',
    correctText: 'Styling web pages',
  },
  {
    id: 7,
    type: 'radio',
    question: 'What is the result of 2 + 2 * 3?',
    choices: ['8', '10', '12', '6'],
    correctIndex: 0,
  },
  {
    id: 8,
    type: 'checkbox',
    question: 'Which data structures are commonly used in programming? (Select all that apply)',
    choices: ['Array', 'Object', 'String', 'Number'],
    correctIndexes: [0, 1],
  },
  {
    id: 9,
    type: 'text',
    question: 'What does API stand for?',
    correctText: 'Application Programming Interface',
  },
  {
    id: 10,
    type: 'radio',
    question: 'Which of the following is a NoSQL database?',
    choices: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite'],
    correctIndex: 2,
  },
  {
    id: 11,
    type: 'checkbox',
    question: 'Which are valid JavaScript variable declaration keywords? (Select all that apply)',
    choices: ['var', 'let', 'const', 'def'],
    correctIndexes: [0, 1, 2],
  },
  {
    id: 12,
    type: 'text',
    question: 'What is the time complexity of binary search?',
    correctText: 'O(log n)',
  },
];

