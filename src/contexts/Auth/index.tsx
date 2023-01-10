import React, { createContext, ReactNode, useState } from 'react';
import { UserDTO } from '~/@types/dtos/user';
import type { AuthContextProps } from './types';

type Props = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps,
);

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<UserDTO>();
  const [loading, setLoading] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const signIn = async (data?: { email: string; password: string }) => {
    setLoading(true);
    await new Promise(resolve => setTimeout(() => resolve('ok'), 2000));
    setLoading(false);
    console.log(data);
    setIsSignedIn(true);
    setUser({ id: '189273basdyghd8aw' });
  };

  const signOut = () => {
    setIsSignedIn(false);
    setUser(undefined);
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, isSignedIn, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
