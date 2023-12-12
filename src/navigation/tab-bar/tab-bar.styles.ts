import { Platform, StyleSheet } from 'react-native';
import { defaultColors } from '../../global-styles/global-styles';
import { IPHONE_FULLSCREEN } from '../../utils/root-navigation';

const styles = StyleSheet.create({
  bar: {
    height: (Platform.OS === 'android' || !IPHONE_FULLSCREEN) ? 'auto' : 45,
    position: 'absolute',
    width: '100%',
    bottom: (Platform.OS === 'android' || !IPHONE_FULLSCREEN) ? 0 : 32,
  },
  safeArea: {
    backgroundColor: defaultColors.transparent
  },
  tabBarLabelStyle: {
    fontSize: 10,
    textAlign: 'center',
    marginBottom: 5,
  },
  tabBarStyle: {
    borderTopWidth: 0,
    elevation: 0,
  },
  tabBarItemStyle: {
    backgroundColor: defaultColors.transparent
  },
  tabBarItemStyleScreen: {
      paddingLeft: 5,
  }
});

export default styles;
