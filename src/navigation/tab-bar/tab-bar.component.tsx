import React from 'react';
import { Platform, SafeAreaView } from 'react-native';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from './tab-bar.styles'
import { defaultColors } from '../../global-styles/global-styles';
import SVG_ICONS from '../../assets/svg-icons/svg-icons';
import { useDrawerProgress } from '@react-navigation/drawer';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import Favourites from '../../screens/favourites/favourites';
import Cart from '../../screens/cart/cart';
import Orders from '../../screens/orders/orders';
import HomeStackScreen from '../homeStackScreen/homeStackScreen';
import Contact from '../../screens/contact/contact';
import { IPHONE_FULLSCREEN, getProportion } from '../../utils/root-navigation';

const MainTab = createBottomTabNavigator();

export const TabBar = () => {
  const progress = useDrawerProgress();
  const number = getProportion(Platform.OS === 'android' ? 162 : IPHONE_FULLSCREEN ? 155 : 175)
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${interpolate(progress.value, [0, 1], [0, -12], 'clamp')}deg`,
        },
      ],
      marginLeft: interpolate(progress.value, [0, 1], [0, number], 'clamp')
    };
  });

  return (
    <MainTab.Navigator
      tabBar={(props) => (
        <SafeAreaView
          style={styles.safeArea}
        >
          <Animated.View
            style={[styles.bar, animatedStyle]}
          >
            <BottomTabBar {...props} />
          </Animated.View>
        </SafeAreaView>
      )}
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveTintColor: defaultColors.black,
        tabBarItemStyle: styles.tabBarItemStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarInactiveTintColor: defaultColors.grayChateau,
        tabBarHideOnKeyboard: true,
        tabBarStyle: styles.tabBarStyle
      }}

    >
      <MainTab.Screen
        name="HomeScreen"
        component={HomeStackScreen}
        options={() => ({
          headerShown: false,
          tabBarLabel: 'Start',
          tabBarItemStyle: styles.tabBarItemStyleScreen,
          tabBarIcon: ({ focused }) =>
            focused
              ? SVG_ICONS.BOTTOM_NAVIGATION.HOME_ACTIVE
              : SVG_ICONS.BOTTOM_NAVIGATION.HOME_INACTIVE,
        })}>
      </MainTab.Screen>
      <MainTab.Screen
        name="CartScreen"
        component={Cart}
        options={() => ({
          headerShown: false,
          tabBarLabel: 'Cart',
          tabBarItemStyle: styles.tabBarItemStyleScreen,
          tabBarIcon: ({ focused }) =>
            focused
              ? SVG_ICONS.BOTTOM_NAVIGATION.HOME_ACTIVE
              : SVG_ICONS.BOTTOM_NAVIGATION.HOME_INACTIVE,
        })}>
      </MainTab.Screen>
      <MainTab.Screen
        name="FavouritesScreen"
        component={Favourites}
        options={() => ({
          headerShown: false,
          tabBarLabel: 'Favourites',
          tabBarItemStyle: styles.tabBarItemStyleScreen,
          tabBarIcon: ({ focused }) =>
            focused
              ? SVG_ICONS.BOTTOM_NAVIGATION.HOME_ACTIVE
              : SVG_ICONS.BOTTOM_NAVIGATION.HOME_INACTIVE,
        })}>
      </MainTab.Screen>
      <MainTab.Screen
        name="OrdersScreen"
        component={Orders}
        options={() => ({
          headerShown: false,
          tabBarLabel: 'Orders',
          tabBarItemStyle: styles.tabBarItemStyleScreen,
          tabBarIcon: ({ focused }) =>
            focused
              ? SVG_ICONS.BOTTOM_NAVIGATION.HOME_ACTIVE
              : SVG_ICONS.BOTTOM_NAVIGATION.HOME_INACTIVE,
        })}>
      </MainTab.Screen>
      <MainTab.Screen
        name="ContactScreen"
        component={Contact}
        options={() => ({
          headerShown: false,
          tabBarLabel: 'Contact',
          tabBarItemStyle: styles.tabBarItemStyleScreen,
          tabBarIcon: ({ focused }) =>
            focused
              ? SVG_ICONS.BOTTOM_NAVIGATION.HOME_ACTIVE
              : SVG_ICONS.BOTTOM_NAVIGATION.HOME_INACTIVE,
        })}>
      </MainTab.Screen>
    </MainTab.Navigator>
  )
};
