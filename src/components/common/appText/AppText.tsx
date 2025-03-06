import React from 'react';
import { TextProps } from 'react-native';
import { Text } from '~/components/nativewindui/Text';

interface TextComponentProps extends TextProps {
  className?: string;
}

const AppText: React.FC<TextComponentProps> = ({ children, className, ...rest }) => {
  return (
    <Text className={` ${className}`} {...rest}>
      {children}
    </Text>
  );
};

export default AppText;
