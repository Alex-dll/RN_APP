import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '~/components/Button';
import { useAuth } from '~/hooks/useAuth';

// import { Container } from './styles';

const OnBoarding: React.FC = () => {
  const { signIn, loading } = useAuth();

  return (
    <SafeAreaView>
      <Button
        onPress={() =>
          signIn({ email: 'alex.sandro@gmail.com', password: 'secret' })
        }
        loading={loading}>
        Sign in
      </Button>
    </SafeAreaView>
  );
};

export default OnBoarding;
