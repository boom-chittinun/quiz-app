import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Question} from '../components/Question';
import {useQuestions} from '../hooks/useQuestions';

export const QuizScreen: React.FC = () => {
  const questions = useQuestions();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (answerIndex: number) => {
    if (answerIndex === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  if (questions.length === 0) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text>
        Question {currentQuestionIndex + 1} of {questions.length}
      </Text>
      <Text>Score: {score}</Text>
      <Question
        question={questions[currentQuestionIndex]}
        onAnswerSelect={handleAnswer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
