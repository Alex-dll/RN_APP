import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';

import useAppearance from '~/hooks/useAppearance';
import Routes from '~/navigation';
import { AuthProvider } from '~/contexts/Auth';

const App: React.FC = () => {
  const { theme } = useAppearance();

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
