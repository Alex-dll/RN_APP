import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { Container } from './styles';

const Profile = ({ navigation }) => {
  const handleNavigation = () => navigation.push('post');

  return (
    <Container>
      <TouchableOpacity onPress={handleNavigation}>
        <Text>Profile</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Profile;
