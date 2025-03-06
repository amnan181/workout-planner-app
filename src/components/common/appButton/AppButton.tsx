import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import AppText from '../appText/AppText';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  className?: string;
}

const AppButton: React.FC<ButtonProps> = ({ title, onPress, className, ...rest }) => {
  return (
    <TouchableOpacity
      className={`rounded-lg bg-blue-500 px-4 py-2 ${className}`}
      onPress={onPress}
      {...rest}>
      <AppText className="text-center font-bold text-white">{title}</AppText>
    </TouchableOpacity>
  );
};

export default AppButton;
