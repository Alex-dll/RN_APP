import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Text from '~/components/Text';
import { Container } from './styles';

const Home = () => {
  const navigation = useNavigation();
  const { params } = useRoute();

  const data = params;
  const handleNavigation = () =>
    navigation.navigate('profile', {
      userName: 'Alex',
    });

  return (
    <Container>
      <TouchableOpacity onPress={handleNavigation}>
        <Text>{`Home: ${data?.selectedUser}`}</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Home;
