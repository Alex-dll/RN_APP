import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, ReactNode, useEffect, useState } from 'react';
import type { UserDTO } from '~/@types/dtos/user';
import { authService } from '~/services/resource/auth';
import { asyncUserKeys, AuthContextProps } from './types';

type Props = {
  children: ReactNode;
};

type signInProps = {
  email: string;
  password: string;
};

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps,
);

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<UserDTO>();
  const [loading, setLoading] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [RehydrateLoading, setRehydrateLoading] = useState(false);

  const signIn = async (data: signInProps) => {
    try {
      setLoading(true);
      const response = await authService.signInResource(data);
      console.log(response.user);
      setUser(response.user);
      setIsSignedIn(true);
      //api.default.headers.Authorization = `Bearer ${response.data.token}`;
      AsyncStorage.setItem(asyncUserKeys.user, JSON.stringify(response.user));
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const signOut = () => {
    setIsSignedIn(false);
    setUser(undefined);
    AsyncStorage.removeItem(asyncUserKeys.user);
  };

  const rehydrate = async () => {
    const rehydrateUser = await AsyncStorage.getItem(asyncUserKeys.user);

    if (rehydrateUser) {
      setUser(JSON.parse(rehydrateUser));
      setIsSignedIn(true);
    }

    setRehydrateLoading(false);
  };

  useEffect(() => {
    rehydrate();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, loading, isSignedIn, signIn, signOut }}>
      {!RehydrateLoading && children}
    </AuthContext.Provider>
  );
};
