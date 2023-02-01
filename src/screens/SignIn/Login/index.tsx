import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components/native';
import Button from '~/components/Button';
import HeaderOptions from '~/components/HeaderOptions';
import Icon from '~/components/Icon';
import Input from '~/components/Input';
import Separator from '~/components/Separator';
import Text from '~/components/Text';
import useSignInNavigation from '~/hooks/useSignInNavigation';

import { Container, AccessText, PressableX } from './styles';
import { schemaLogin } from './validation';

const Login: React.FC = () => {
  const { spacing } = useTheme();
  const navigation = useSignInNavigation();

  /**
   * Forms
   */

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaLogin),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  /**
   * Callback
   */
  const handleGoBack = () => navigation.goBack();

  const onSubmit = async () => {
    await handleSubmit(
      ({ email, password }) => {
        console.log(email, password);
      },
      // () => console.error('form invalido'),
    )();
  };

  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <HeaderOptions
        left={
          <PressableX onPress={handleGoBack}>
            <Icon icon="closeX" size={15} />
          </PressableX>
        }
        right={
          <Text color="primary" typography="body3">
            Esqueci minha senha
          </Text>
        }
      />
      <Separator height={spacing.md} />
      <Text typography="h3">Login</Text>

      <Separator height={spacing.md} />

      <Controller
        control={control}
        name="email"
        render={({ field: { onBlur, onChange, value, ref } }) => (
          <Input
            onBlur={onBlur}
            onChange={onChange}
            onChangeText={text => setValue('email', text)}
            ref={ref}
            value={value}
            label="Email"
            iconPosition="right"
            icon="checkCircle"
            iconColor="primary"
            error={errors.email?.message}
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect={false}
            keyboardType="email-address"
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field: { onBlur, onChange, value, ref } }) => (
          <Input
            onBlur={onBlur}
            onChange={onChange}
            onChangeText={text => setValue('password', text)}
            value={value}
            ref={ref}
            label="password"
            secureTextEntry
            iconColor="primary"
            autoCapitalize="none"
            autoComplete="password"
            autoCorrect={false}
            error={errors.password?.message}
          />
        )}
      />

      <Separator height={spacing.md} />
      <Button onPress={onSubmit}>Login</Button>

      <Separator height={spacing.md} />
      <AccessText color="surface500" typography="body3">
        ou acesse com login social
      </AccessText>

      <Separator height={spacing.md} />
      <Button
        typography="caption"
        icon={<Icon icon="apple" />}
        color="secondary"
        mode="outline">
        Continuar com a Apple
      </Button>

      <Separator height={spacing.md} />
      <Button
        typography="caption"
        icon={<Icon icon="google" />}
        color="secondary"
        mode="outline">
        Continuar com o Google
      </Button>
    </Container>
  );
};

export default Login;
