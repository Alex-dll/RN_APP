import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '~/screens/Profile';
import Post from '~/screens/Post';

const Stack = createNativeStackNavigator<ProfileStackParamsList>();

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="perfil">
      <Stack.Screen name="perfil" component={Profile} />
      <Stack.Screen name="post" component={Post} />
    </Stack.Navigator>
  );
};

export default ProfileStackNavigator;
