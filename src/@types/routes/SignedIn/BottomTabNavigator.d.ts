import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

declare global {
  export type BottomTabsParamList = {
    home: undefined;
    profile: undefined;
  };

  export type StartBottomTabNavigationProp = BottomTabNavigationProp<
    BottomTabsParamList,
    'home'
  >;
}
