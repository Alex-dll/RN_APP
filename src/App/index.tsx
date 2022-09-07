import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from '../components/Button';
import Header from '../components/Header';
import Text from '../components/Text';

import useAppearance from '../hooks/useAppearance';
import { Container } from './styles';

const App: React.FC = () => {
  const { theme } = useAppearance();
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <Button onPress={() => {}} />
        <Text typography="h4" color="primary">
          Teste
        </Text>
      </Container>
    </ThemeProvider>
  );
};

export default App;
