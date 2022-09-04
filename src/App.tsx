import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Header from './components/Header';

// import { Container } from './styles';

const src: React.FC = () => {
  return (
    <SafeAreaView style={styles.App}>
      <Header />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  App: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default src;
