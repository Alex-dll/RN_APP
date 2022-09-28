import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feed from '~/screens/Feed';
import Stories from '~/screens/Stories';

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="feed">
      <Stack.Screen name="feed" component={Feed} />
      <Stack.Screen name="stories" component={Stories} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
