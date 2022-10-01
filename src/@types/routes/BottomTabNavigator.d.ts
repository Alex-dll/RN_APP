import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NavigatorScreenParams } from '@react-navigation/native';
import { HomeStackParamsList } from './HomeStackNavigator';
import { ProfileStackParamsList } from './ProfileStackNavigator';

declare global {
  export type BottomTabsParamList = {
    home: NavigatorScreenParams<HomeStackParamsList> | undefined;
    profile: NavigatorScreenParams<ProfileStackParamsList> | undefined;
  };

  export type StartBottomTabNavigationProp = BottomTabNavigationProp<
    BottomTabsParamList,
    'home'
  >;
}
