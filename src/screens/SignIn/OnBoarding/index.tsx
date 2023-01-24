import React, { useState } from 'react';
import { LayoutChangeEvent, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components/native';
import Button from '~/components/Button';
import Separator from '~/components/Separator';
import Text from '~/components/Text';
import useSignInNavigation from '~/hooks/useSignInNavigation';

import { Container, ContainerColumn, Person } from './styles';

const OnBoarding: React.FC = () => {
  const { spacing } = useTheme();
  const { height } = useWindowDimensions();
  const { bottom, top } = useSafeAreaInsets();
  const navigation = useSignInNavigation();

  /**
   * State
   */
  const [heightPerson, seHeightPerson] = useState(0);

  /**
   * Callbacks
   */
  const handleHeightToPerson = (heightContainerBox: number) => {
    const freeSpace = height - (heightContainerBox + top + bottom + 60);
    seHeightPerson(freeSpace);
  };

  const handleNavigationToAccessScreen = () => navigation.navigate('access');

  return (
    <Container>
      <Separator height={spacing.sm} />
      <Person size={heightPerson} icon="doctor" />

      <ContainerColumn
        onLayout={(e: LayoutChangeEvent) =>
          handleHeightToPerson(e.nativeEvent.layout.height)
        }>
        <Separator height={spacing.md} />

        <Text typography="h4">
          Bem vindx ao <Text typography="h3">Vacinadx</Text>{' '}
        </Text>
        <Separator height={spacing.xxl} />
        <Text typography="subtitle1">
          Sua carteira digital de vacinação de maneira fácil e prática de
          carregar!
        </Text>

        <Separator height={spacing.xxl} />
        <Button onPress={handleNavigationToAccessScreen}>Começar</Button>
        <Separator height={spacing.md} />
      </ContainerColumn>
    </Container>
  );
};

export default OnBoarding;
