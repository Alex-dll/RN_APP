import type { TypographyType } from 'styled-components';
import styled from 'styled-components/native';
import { Mode } from './types';

interface IContainerButton {
  readonly color: string;
  readonly borderColor: string;
  readonly mode: Mode;
}

export const ContainerButton = styled.TouchableOpacity<IContainerButton>`
  padding: 12px 0;
  background-color: ${({ color, mode }) => {
    if (mode === 'outline') {
      return 'transparent';
    }
    return color;
  }};
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borders.radius.sm}px;
  flex-direction: row;
  border-color: ${({ borderColor }) => borderColor || 'transparent'};
  border-width: 1px;
`;

interface ITitle {
  readonly color: string;
  readonly typography: TypographyType;
}

export const Title = styled.Text<ITitle>`
  color: ${({ color }) => color};
  font-family: ${({ theme, typography }) =>
    theme.typography[typography].fontFamily};
  font-size: ${({ theme, typography }) =>
    theme.typography[typography].fontSize}px;
  align-self: center;
`;

export const Loading = styled.ActivityIndicator`
  margin-left: ${({ theme }) => theme.spacing.sm}px;
`;

export const AbsoluteIcon = styled.View`
  position: absolute;
  left: ${({ theme }) => theme.spacing.md}px;
`;
