import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { Container } from './styles';

const Profile = ({ navigation, route }) => {
  const { userName } = route.params;

  const handleNavigation = () => navigation.push('profile');
  const handleUpdate = () =>
    navigation.setParams({
      userName: 'alex.dlli',
    });
  const handleNavigateToHome = () =>
    navigation.navigate('home', {
      selectedUser: userName,
    });

  return (
    <Container>
      <TouchableOpacity onPress={handleNavigation}>
        <Text>Profile: {userName}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleUpdate}>
        <Text>Update params</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleNavigateToHome}>
        <Text>Navigate to Home with Params</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Profile;
