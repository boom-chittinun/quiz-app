import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {LeaderBoardEntry} from '../types';

interface LeaderBoardProps {
  entries: LeaderBoardEntry[];
}

export const LeaderBoard: React.FC<LeaderBoardProps> = ({entries}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leader Board</Text>
      <FlatList
        data={entries}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <View style={styles.entry}>
            <Text>
              {index + 1}. {item.name}
            </Text>
            <Text>{item.score}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  entry: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
