import React, { useEffect, useState } from 'react';
import { DevSettings } from 'react-native';
import BottomTabNavigator from './SignedInNavigator/BottomTabNavigator';
import SignInNavigator from './SignInNavigator';

const Routes: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(
    () =>
      DevSettings.addMenuItem('Change Routes', () =>
        setIsLoggedIn(prevState => !prevState),
      ),
    [],
  );

  return isLoggedIn ? <BottomTabNavigator /> : <SignInNavigator />;
};

export default Routes;
