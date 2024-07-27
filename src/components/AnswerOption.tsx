import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface AnswerOptionProps {
  answer: string;
  onSelect: () => void;
}

export const AnswerOption: React.FC<AnswerOptionProps> = ({
  answer,
  onSelect,
}) => {
  return (
    <TouchableOpacity style={styles.answerOption} onPress={onSelect}>
      <Text>{answer}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  answerOption: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
});
