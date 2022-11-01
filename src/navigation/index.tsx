import React from 'react';

import { useAuthContext } from '~/hooks/useAuthContext';
import BottomTabNavigator from './SignedInNavigator/BottomTabNavigator';
import SignInNavigator from './SignInNavigator';

const Routes: React.FC = () => {
  const { isLoggedIn } = useAuthContext();

  return isLoggedIn ? <BottomTabNavigator /> : <SignInNavigator />;
};

export default Routes;
