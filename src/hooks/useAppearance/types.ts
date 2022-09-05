import { ColorSchemeName } from 'react-native';

export type themeType = 'light' | 'dark';

export interface AppearanceProps {
  currentTheme: 'light' | 'dark';
  theme: object;
}

export interface colorSchemeProps {
  colorScheme: ColorSchemeName;
}
