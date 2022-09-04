import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type HeaderProps = {
  name: string;
  title: string;
};

const Header: React.FC<HeaderProps> = ({ name, title }: HeaderProps) => {
  return (
    <View>
      <Text style={styles.Title}>{title}</Text>
      <Text style={styles.SubTitle}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Title: {
    color: 'black',
    fontSize: 20,
  },
  SubTitle: {
    color: 'black',
    fontSize: 30,
  },
});

export default Header;
