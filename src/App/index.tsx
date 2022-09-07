import React from 'react';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import Button from '../components/Button';
import Icon from '../components/Icon';

import useAppearance from '../hooks/useAppearance';
import { Container } from './styles';

const App: React.FC = () => {
  const { theme } = useAppearance();
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Icon icon="ghost" size={150} />
          <Icon icon="catrina" size={150} />
        </View>
        <Button color="surface" mode="outline" loading>
          Change Icons
        </Button>
      </Container>
    </ThemeProvider>
  );
};

export default App;
