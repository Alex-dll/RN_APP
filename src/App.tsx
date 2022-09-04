import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Header from './components/Header';

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
    margin: 20,
  },
});

export default src;
