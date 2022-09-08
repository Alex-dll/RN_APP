import { NavigationContainer } from '@react-navigation/native';
import React, { useRef } from 'react';
import { Alert, View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import Button from '~/components/Button';
import Icon from '~/components/Icon';
import Input from '~/components/Input';
import { InputValueRef } from '~/components/Input/types';
import Separator from '~/components/Separator';

import useAppearance from '~/hooks/useAppearance';
import { Container } from './styles';

const App: React.FC = () => {
  const { theme } = useAppearance();

  const refEmail = useRef<InputValueRef>({} as InputValueRef);
  const refPassword = useRef<InputValueRef>({} as InputValueRef);

  const handlePress = () => {
    Alert.alert(
      refEmail.current?.value || 'aff',
      refPassword.current?.value || 'aff',
    );
  };

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Container>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Icon icon="ghost" size={150} />
            <Separator width={30} />
            <Icon icon="catrina" size={150} />
          </View>
          <View>
            <Input
              ref={refEmail}
              placeholder="jonhdoe@mail.com"
              label="E-Mail"
              icon="knight"
              iconPosition="right"
            />
            <Separator height={10} />
            <Input
              ref={refPassword}
              placeholder="sua senha"
              secureTextEntry
              label="password"
            />
          </View>
          <Button color="surface" mode="outline" onPress={handlePress}>
            Login
          </Button>
          <Separator />
        </Container>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
