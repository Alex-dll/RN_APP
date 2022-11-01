import { NativeStackNavigationProp } from '@react-navigation/native-stack';

declare global {
  export type SignInStackParamsList = {
    access: undefined;
    login: undefined;
    onBoarding: undefined;
    signUp: undefined;
  };

  export type SignInStackNavigatorProps = NativeStackNavigationProp<
    SignInStackParamsList,
    'access'
  >;

  // export type StoriesSignInStackRouteProps = RouteProp<
  //   SignInStackParamsList,
  //   'access'
  // >;
}
