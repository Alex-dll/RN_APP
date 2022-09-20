import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '~/screens/Home';
import Profile from '~/screens/Profile';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default Routes;
