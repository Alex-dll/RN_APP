import React from 'react';

import { IconContainer } from './styles';
import { IconProps } from './types';

import Icons from '../../constants/icons';

const Icon: React.FC<Omit<IconProps, 'source'>> = ({
  icon,
  size = 20,
  activeColor,
  style,
}: Omit<IconProps, 'source'>) => {
  if (activeColor) {
    return (
      <IconContainer
        size={size}
        source={Icons[icon]}
        style={[{ tintColor: activeColor }, style]}
        resizeMode="contain"
      />
    );
  }
  return (
    <IconContainer
      size={size}
      source={Icons[icon]}
      style={style}
      resizeMode="contain"
    />
  );
};

export default Icon;
