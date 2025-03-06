import { Dimensions, Platform } from 'react-native';

export const APP_SIZE = {
  width: Dimensions.get('screen').width,
  height: Dimensions.get('screen').height,
};

export const IS_ANDROID = Platform.OS === 'android';
export const IS_IOS = Platform.OS === 'ios';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
export const RPH = (percentage: number) => {
  return (percentage / 100) * screenHeight;
};
export const RPW = (percentage: number) => {
  return (percentage / 100) * screenWidth;
};
