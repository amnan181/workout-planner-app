import React from 'react';
import { Text as RNText, TextProps } from 'react-native';

interface TextComponentProps extends TextProps {
  className?: string;
}

const AppText: React.FC<TextComponentProps> = ({ children, className, ...rest }) => {
  return (
    <RNText className={`text-black ${className}`} {...rest}>
      {children}
    </RNText>
  );
};

export default AppText;
