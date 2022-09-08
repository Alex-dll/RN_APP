import React from 'react';
import { View } from 'react-native';
import Button from '~/components/Button';
import Icon from '~/components/Icon';
import Input from '~/components/Input';
import Separator from '~/components/Separator';

import { Container } from './styles';

const Profile: React.FC = () => {
  return (
    <Container>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Icon icon="ghost" size={150} />
        <Separator width={30} />
        <Icon icon="catrina" size={150} />
      </View>
      <View>
        <Input
          placeholder="jonhdoe@mail.com"
          label="E-Mail"
          icon="knight"
          iconPosition="right"
        />
        <Separator height={10} />
        <Input placeholder="sua senha" secureTextEntry label="password" />
      </View>
      <Button color="surface" mode="outline" onPress={() => {}}>
        Login
      </Button>
      <Separator />
    </Container>
  );
};

export default Profile;
