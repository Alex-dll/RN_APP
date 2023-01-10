import React from 'react';
import { View } from 'react-native';
import { useAuth } from '~/hooks/useAuth';

// import { Container } from './styles';

const OnBoarding: React.FC = () => {
  const ctx = useAuth();
  console.log(ctx);
  return <View />;
};

export default OnBoarding;
