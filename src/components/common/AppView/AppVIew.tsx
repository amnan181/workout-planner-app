import React from 'react';
import { View as RNView, ViewProps } from 'react-native';

interface ViewComponentProps extends ViewProps {
  className?: string;
}

const AppView: React.FC<ViewComponentProps> = ({ children, className, ...rest }) => {
  return (
    <RNView className={`${className}`} {...rest}>
      {children}
    </RNView>
  );
};

export default AppView;
