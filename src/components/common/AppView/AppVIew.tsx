import React from 'react';
import {
  ColorValue,
  DimensionValue,
  FlexAlignType,
  View as RNView,
  SafeAreaView,
  ScrollView,
  ScrollViewProps,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewProps,
} from 'react-native';

import { CustomStyleTypes } from '~/types/styleTypes';

export type AppViewPropsTypes = TouchableOpacityProps &
  ScrollViewProps &
  ViewProps & {
    appColorOpacity?: number;
    isDarkTheme?: boolean;
    useButton?: boolean;

    width?: DimensionValue | undefined;
    maxWidth?: DimensionValue | undefined;
    minWidth?: DimensionValue | undefined;

    height?: DimensionValue | undefined;
    minHeight?: DimensionValue | undefined;
    useSafeAreaView?: boolean;
    useScrollView?: boolean;
    useKeyboardView?: boolean;
    flex?: boolean | undefined;
    flexGrow?: number;
    marginTop?: number;
    marginHorizontal?: number;
    marginBottom?: DimensionValue | undefined;
    marginVertical?: number;
    borderRadius?: number;
    paddingHorizontal?: DimensionValue | undefined;
    paddingBottom?: DimensionValue | undefined;
    paddingLeft?: DimensionValue | undefined;
    paddingRight?: DimensionValue | undefined;
    paddingTop?: DimensionValue | undefined;
    paddingVertical?: DimensionValue | undefined;
    showShadow?: boolean;
    alignSelf?: 'auto' | FlexAlignType;
    alignItems?: FlexAlignType | undefined;
    behavior?: string;
    padding?: DimensionValue | undefined;
    flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse' | undefined;
    justifyContent?:
      | 'flex-start'
      | 'flex-end'
      | 'center'
      | 'space-between'
      | 'space-around'
      | 'space-evenly'
      | undefined;
    marginRight?: DimensionValue | undefined;
    center?: boolean | undefined;
    marginLeft?: DimensionValue | undefined;
    borderWidth?: number | undefined;
    gap?: number | undefined;
    borderColor?: ColorValue | undefined;
    zIndex?: number;
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
    absolute?: boolean;
    className?: string;
  };

const AppView: React.FC<AppViewPropsTypes> = ({ children, className, useButton, ...rest }) => {
  const extraStyle: CustomStyleTypes = {};
  if (rest.flex) {
    extraStyle.flex = 1;
  }
  if (rest.zIndex) {
    extraStyle.zIndex = rest.zIndex;
  }
  if (rest.absolute) {
    extraStyle.position = 'absolute';
  }
  if (rest.borderWidth) {
    extraStyle.borderWidth = rest.borderWidth;
  }
  if (rest.borderColor) {
    extraStyle.borderColor = rest.borderColor;
  }
  if (rest.flexGrow) {
    extraStyle.flexGrow = rest.flexGrow;
  }
  if (rest.alignSelf) {
    extraStyle.alignSelf = rest.alignSelf;
  }

  if (rest.alignItems) {
    extraStyle.alignItems = rest.alignItems;
  }

  if (rest.gap) {
    extraStyle.gap = rest.gap;
  }

  if (rest.width) {
    extraStyle.width = rest.width;
  }
  if (rest.maxWidth) {
    extraStyle.maxWidth = rest.maxWidth;
  }
  if (rest.minWidth) {
    extraStyle.minWidth = rest.minWidth;
  }
  if (rest.marginLeft) {
    extraStyle.marginLeft = rest.marginLeft;
  }
  if (rest.height) {
    extraStyle.height = rest.height;
  }
  if (rest.minHeight) {
    extraStyle.minHeight = rest.minHeight;
  }
  if (rest.paddingRight) {
    extraStyle.paddingRight = rest.paddingRight;
  }
  if (rest.paddingHorizontal) {
    extraStyle.paddingHorizontal = rest.paddingHorizontal;
  }
  if (rest.paddingVertical) {
    extraStyle.paddingVertical = rest.paddingVertical;
  }
  if (rest.paddingLeft) {
    extraStyle.paddingLeft = rest.paddingLeft;
  }

  if (rest.marginBottom) {
    extraStyle.marginBottom = rest.marginBottom;
  }
  if (rest.marginHorizontal) {
    extraStyle.marginHorizontal = rest.marginHorizontal;
  }
  if (rest.marginVertical) {
    extraStyle.marginVertical = rest.marginVertical;
  }

  if (rest.marginTop) {
    extraStyle.marginTop = rest.marginTop;
  }

  if (rest.borderRadius) {
    extraStyle.borderRadius = rest.borderRadius;
  }
  if (rest.padding) {
    extraStyle.padding = rest.padding;
  }
  if (rest.paddingTop) {
    extraStyle.paddingTop = rest.paddingTop;
  }
  if (rest.paddingBottom) {
    extraStyle.paddingBottom = rest.paddingBottom;
  }
  if (rest.flexDirection) {
    extraStyle.flexDirection = rest.flexDirection;
  }
  if (rest.top) {
    extraStyle.top = rest.top;
  }
  if (rest.bottom) {
    extraStyle.bottom = rest.bottom;
  }
  if (rest.left) {
    extraStyle.left = rest.left;
  }
  if (rest.right) {
    extraStyle.right = rest.right;
  }
  if (rest.justifyContent) {
    extraStyle.justifyContent = rest.justifyContent;
  }

  if (rest.marginRight) {
    extraStyle.marginRight = rest.marginRight;
  }
  if (rest.marginBottom) {
    extraStyle.marginBottom = rest.marginBottom;
  }
  if (rest.showShadow) {
    extraStyle.shadowOpacity = 0.5;
    extraStyle.shadowRadius = 5.84;
    extraStyle.elevation = 5;
    extraStyle.shadowOffset = {
      width: 0,
      height: 4,
    };
  }

  if (rest.center) {
    extraStyle.alignItems = 'center';
    extraStyle.justifyContent = 'center';
  }

  if (rest.useSafeAreaView) {
    return <SafeAreaView className={`${className}`} {...rest} style={[rest.style, extraStyle]} />;
  }
  if (rest.useScrollView) {
    return <ScrollView className={`${className}`} {...rest} style={[rest.style, extraStyle]} />;
  }

  if (useButton) {
    return (
      <TouchableOpacity className={`${className}`} style={[rest.style, extraStyle]} {...rest}>
        {children}
      </TouchableOpacity>
    );
  }
  return (
    <RNView className={`${className}`} style={[rest.style, extraStyle]} {...rest}>
      {children}
    </RNView>
  );
};

export default AppView;
