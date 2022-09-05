import React, { useContext } from 'react';
import { Button as ButtonRN } from 'react-native';
import { ThemeContext } from 'styled-components';

// import { Container } from './styles';

type ButtonProps = {
  onPress: () => void;
};

const Button: React.FC<ButtonProps> = ({ onPress }: ButtonProps) => {
  const themeContext = useContext(ThemeContext);
  console.log(themeContext);
  return (
    <ButtonRN
      color={themeContext.colors.secondary}
      title="Change theme"
      onPress={onPress}
    />
  );
};

export default Button;
