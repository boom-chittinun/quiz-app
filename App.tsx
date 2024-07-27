import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {QuizScreen} from './src/screens/QuizScreen';
import {LeaderBoardScreen} from './src/screens/LeaderBoardScreen';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Quiz">
        <Stack.Screen name="Quiz" component={QuizScreen} />
        <Stack.Screen name="LeaderBoard" component={LeaderBoardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
