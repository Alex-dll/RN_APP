import { useContext } from 'react';
import { AuthContext } from '~/contexts/Auth';

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  return context;
};
