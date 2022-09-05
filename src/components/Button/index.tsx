import React, { useContext } from 'react';
import { Button as ButtonRN } from 'react-native';
import { ThemeContext } from 'styled-components';

type ButtonProps = {
  onPress: () => void;
};

const Button: React.FC<ButtonProps> = ({ onPress }: ButtonProps) => {
  const themeContext = useContext(ThemeContext);
  console.log(themeContext);
  return (
    <ButtonRN
      color={themeContext.colors.primary.main}
      title="Change theme"
      onPress={onPress}
    />
  );
};

export default Button;
