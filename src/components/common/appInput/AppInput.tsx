import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
  className?: string;
}

const AppInput: React.FC<InputProps> = ({
  placeholder,
  value,
  onChangeText,
  className,
  ...rest
}) => {
  return (
    <TextInput
      className={`rounded-lg border border-gray-300 px-4 py-2 ${className}`}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      {...rest}
    />
  );
};

export default AppInput;
