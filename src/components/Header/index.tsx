import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header: React.FC = () => {
  return (
    <View>
      <Text style={styles.Title}>Olá,</Text>
      <Text style={styles.SubTitle}>Alex</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Title: {
    color: 'black',
    fontSize: 30,
  },
  SubTitle: {
    color: 'black',
    fontSize: 15,
  },
});

export default Header;
