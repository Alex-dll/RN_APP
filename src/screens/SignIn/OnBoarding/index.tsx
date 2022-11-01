import React from 'react';
import { View } from 'react-native';
import { useAuthContext } from '~/hooks/useAuthContext';

// import { Container } from './styles';

const OnBoarding: React.FC = () => {
  const ctx = useAuthContext();
  console.log(ctx);
  return <View />;
};

export default OnBoarding;
