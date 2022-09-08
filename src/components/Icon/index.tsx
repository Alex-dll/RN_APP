import React, { useContext } from 'react';

import { IconContainer } from './styles';
import { IconProps } from './types';

import Icons from '../../constants/icons';
import { ThemeContext } from 'styled-components/native';

const Icon: React.FC<Omit<IconProps, 'source'>> = ({
  icon,
  size = 20,
  activeColor,
  style,
}: Omit<IconProps, 'source'>) => {
  const { colors } = useContext(ThemeContext);

  console.log(colors);

  if (activeColor) {
    return (
      <IconContainer
        size={size}
        source={Icons[icon]}
        style={[{ tintColor: activeColor }, style]}
      />
    );
  }
  return <IconContainer size={size} source={Icons[icon]} />;
};

export default Icon;
