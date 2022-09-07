import React from 'react';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components';
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
      </Container>
    </ThemeProvider>
  );
};

export default App;
