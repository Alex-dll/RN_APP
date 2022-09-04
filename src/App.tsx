import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.App}>
      <Header title="Bem-Vindo ao RN" name="Alex" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  App: {
    flex: 1,
    margin: 20,
  },
});

export default App;
