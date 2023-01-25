import React, { useMemo } from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components/native';
import Separator from '../Separator';

import { Container } from './styles';
import type { HeaderOptionsProps } from './types';

const HeaderOptions = ({
  left = <Separator />,
  center = <Separator />,
  right = <Separator />,
}: HeaderOptionsProps) => {
  const { spacing } = useTheme();

  const heightSeparatorStatusBar = useMemo(() => {
    return StatusBar.currentHeight
      ? StatusBar.currentHeight + spacing.md
      : spacing.md;
  }, [spacing.md]);

  return (
    <>
      <Separator height={heightSeparatorStatusBar} />
      <Container>
        {left}
        {center}
        {right}
      </Container>
    </>
  );
};

export default HeaderOptions;
