import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from '~/components/Icon';
import Home from '~/screens/SingedIn/Home';
import Profile from '~/screens/SingedIn/Profile';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="home"
        component={Home}
        options={{
          header: () => null,
          tabBarIcon: () => <Icon icon="ghost" />,
        }}
      />
      <BottomTab.Screen
        name="profile"
        component={Profile}
        options={{
          header: () => null,
          tabBarIcon: () => <Icon icon="knight" />,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
