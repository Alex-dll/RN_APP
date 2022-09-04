import React, { useCallback, useState } from 'react';
import { Button, SafeAreaView, StyleSheet } from 'react-native';
import Header from './components/Header';

const App: React.FC = () => {
  const [name, setName] = useState<string>('Alex');
  const [title] = useState<string>('Bem-Vindo');

  const handlePressButton = useCallback(() => {
    setName(prevState => (prevState === 'Alex' ? 'Sandro' : 'Alex'));
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
