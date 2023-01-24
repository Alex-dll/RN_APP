import React from 'react';
import { StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components/native';

import slashImage from '~/assets/images/splash/splashScreen.png';
import Button from '~/components/Button';
import Separator from '~/components/Separator';
import Text from '~/components/Text';
import useSignInNavigation from '~/hooks/useSignInNavigation';

import {
  Container,
  ContainerRounded,
  IconRoundedVaccine,
  IconVaccine,
  Column,
} from './styles';

const Access = () => {
  const { bottom } = useSafeAreaInsets();
  const { spacing } = useTheme();
  const navigation = useSignInNavigation();

  /**
   * Callback
   */
  const handleNavigateToLogin = () => navigation.navigate('login');
  const handleNavigateToSignUp = () => navigation.navigate('signUp');

  return (
    <Container source={slashImage}>
      <StatusBar barStyle="light-content" />

      <Column>
        <IconRoundedVaccine>
          <IconVaccine icon="vaccinePlus" size={80} />
        </IconRoundedVaccine>
        <Separator height={spacing.md} />
        <Text typography="h2" color="background">
          Vacinadx
        </Text>
      </Column>

      <ContainerRounded>
        <Separator height={spacing.xl} />
        <Text typography="h4">Bem vindx</Text>
        <Separator height={spacing.sm} />
        <Text typography="subtitle1">Acesse ao app</Text>
        <Separator height={spacing.xxl} />
        <Button onPress={handleNavigateToLogin}>Login</Button>
        <Separator height={spacing.lg} />
        <Button mode="outline" onPress={handleNavigateToSignUp}>
          Cadastro
        </Button>
        <Separator height={bottom + spacing.xxxl} />
      </ContainerRounded>
    </Container>
  );
};

export default Access;
