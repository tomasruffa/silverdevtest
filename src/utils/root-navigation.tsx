import {
  createNavigationContainerRef,
} from '@react-navigation/native';
import {Dimensions, Platform} from 'react-native';

const {height, width} = Dimensions.get('screen');

export const navigationRef = createNavigationContainerRef();

export const getProportion = (value: number, widthBasis?: number) => {
  const basis = widthBasis ? widthBasis : 896;
  const multiplier = widthBasis ? width : height;
  return (value * multiplier) / basis;
};

export const IPHONE_FULLSCREEN = (() => {
  if (Platform.OS === 'web') {
    return false;
  }
  return Platform.OS === 'ios' && height > 667;
})();