import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { Container } from './styles';

const Profile = () => {
  const navigation = useNavigation();

  const handleNavigation = () => navigation.navigate('post');

  return (
    <Container>
      <TouchableOpacity onPress={handleNavigation}>
        <Text>Profile</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Profile;
