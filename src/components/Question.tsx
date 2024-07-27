import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Question as QuestionType} from '../types';
import {AnswerOption} from './AnswerOption';

interface QuestionProps {
  question: QuestionType;
  onAnswerSelect: (answerIndex: number) => void;
}

export const Question: React.FC<QuestionProps> = ({
  question,
  onAnswerSelect,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{question.text}</Text>
      {question.answers.map((answer, index) => (
        <AnswerOption
          key={index}
          answer={answer}
          onSelect={() => onAnswerSelect(index)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  questionText: {
    fontSize: 18,
    marginBottom: 10,
  },
});
