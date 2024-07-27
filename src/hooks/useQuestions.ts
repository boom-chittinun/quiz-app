import {useState, useEffect} from 'react';
import {Question} from '../types';
import {questions} from '../data/questions';
import {shuffleArray} from '../utils/shuffleArray';

export function useQuestions() {
  const [randomizedQuestions, setRandomizedQuestions] = useState<Question[]>(
    [],
  );

  useEffect(() => {
    const shuffledQuestions = shuffleArray(questions).slice(0, 20);
    const questionsWithShuffledAnswers = shuffledQuestions.map(q => ({
      ...q,
      answers: shuffleArray(q.answers),
    }));
    setRandomizedQuestions(questionsWithShuffledAnswers);
  }, []);

  return randomizedQuestions;
}
