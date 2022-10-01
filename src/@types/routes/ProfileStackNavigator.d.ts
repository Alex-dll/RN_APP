import { NativeStackNavigationProp } from '@react-navigation/native-stack';

declare global {
  export type ProfileStackParamsList = {
    perfil: undefined;
    post: undefined;
  };

  export type ProfileStackNavigatorProps = NativeStackNavigationProp<
    ProfileStackParamsList,
    'perfil'
  >;
}
