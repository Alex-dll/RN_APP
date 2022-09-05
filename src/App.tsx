import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { ThemeProvider } from 'styled-components';
import Button from './components/Button';
import Header from './components/Header';

import useAppearance from './hooks/useAppearance';

const App: React.FC = () => {
  const { theme } = useAppearance();
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={styles.App}>
        <Header />
        <Button onPress={() => {}} />
      </SafeAreaView>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  App: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default App;
