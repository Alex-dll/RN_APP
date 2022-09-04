import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

// import { Container } from './styles';

const src: React.FC = () => {
  return (
    <SafeAreaView style={styles.App}>
      <Text style={styles.Title}>Wellcome to schina Academy</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  App: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  Title: {
    color: 'white',
    fontSize: 30,
  },
});

export default src;
