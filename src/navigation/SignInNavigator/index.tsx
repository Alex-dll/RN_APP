import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '~/screens/SignIn/Login';
import OnBoarding from '~/screens/SignIn/OnBoarding';
import Access from '~/screens/SignIn/Access';
import SignUp from '~/screens/SignIn/SignUp';

const Stack = createNativeStackNavigator<SignInStackParamsList>();

const SignInNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="onBoarding">
      <Stack.Screen name="onBoarding" component={OnBoarding} />
      <Stack.Screen name="access" component={Access} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default SignInNavigator;
