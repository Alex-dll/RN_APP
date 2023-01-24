import type { ReactNode } from 'react';
import type { TextProps } from 'react-native';
import type { ColorsType, TypographyType } from 'styled-components';

export interface IText extends TextProps {
  children: string | ReactNode;
  color?: ColorsType;
  typography?: TypographyType;
}
