import React, { useCallback, useState } from 'react';
import { Button, SafeAreaView, StyleSheet } from 'react-native';
import Header from './components/Header';

const App: React.FC = () => {
  const [name, setName] = useState<string>('Alex');
  const [title] = useState<string>('Ola');

  const handlePressButton = useCallback(() => {
    setName(prevState => (prevState === 'Alex' ? 'Amoreco' : 'Alex'));
  }, []);

  return (
    <SafeAreaView style={styles.App}>
      <Header title={title} name={name} />
      <Button title="Change name" onPress={handlePressButton} />
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
