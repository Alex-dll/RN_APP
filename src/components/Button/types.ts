import type { ReactNode } from 'react';
import type { TouchableOpacityProps } from 'react-native';
import type { ColorsType, TypographyType } from 'styled-components';

export type Mode = 'outline' | 'contained';

export interface ButtonProps extends TouchableOpacityProps {
  children: string;
  color?: ColorsType;
  mode?: Mode;
  loading?: boolean;
  icon?: ReactNode;
  typography?: TypographyType;
}
