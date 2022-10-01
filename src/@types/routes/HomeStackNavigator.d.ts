import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

declare global {
  export type HomeStackParamsList = {
    feed: undefined;
    stories: { profile: string };
  };

  export type HomeStackNavigatorProps = NativeStackNavigationProp<
    HomeStackParamsList,
    'feed'
  >;

  export type StoriesHomeStackRouteProps = RouteProp<
    HomeStackParamsList,
    'stories'
  >;
}
