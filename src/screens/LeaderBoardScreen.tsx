import React from 'react';
import {View, StyleSheet} from 'react-native';
import {LeaderBoard} from '../components/LeaderBoard';
import {LeaderBoardEntry} from '../types';

const dummyLeaderBoard: LeaderBoardEntry[] = [
  {name: 'Boom', score: 18},
  {name: 'Test', score: 16},
  {name: 'John', score: 15},
];

export const LeaderBoardScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <LeaderBoard entries={dummyLeaderBoard} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
