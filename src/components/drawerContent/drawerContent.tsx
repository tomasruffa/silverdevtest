import React from 'react';
import { DrawerContentComponentProps, DrawerContentScrollView, useDrawerProgress } from '@react-navigation/drawer';
import { Text, TouchableOpacity, View } from 'react-native';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import styles from './drawerContent.styles';
import { navigationRef } from '../../utils/root-navigation';

const DrawerContent = ({...props}: DrawerContentComponentProps) => {
    const progress = useDrawerProgress();
    const animatedStyle = useAnimatedStyle(() => {
        return {
            marginTop: interpolate(progress.value, [0, 1], [0, 50]),
        };
    });
    const route = navigationRef.current?.getCurrentRoute()?.name ?? 'StartScreen';
    
    return (
        <Animated.View style={[styles.container, animatedStyle]}>
            <View style={styles.bar} />
            <DrawerContentScrollView {...props} scrollEnabled={false} style={styles.drawerContent} contentContainerStyle={styles.drawerContainer}>
                <Text style={styles.title}>Beka</Text>
                <View style={styles.itemsContainer}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('StartScreen')} style={[route === 'StartScreen' && styles.buttonColor, styles.button]}>
                        <Text style={[styles.buttonText, route === 'StartScreen' && styles.buttonTextColor]}>Start</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navigation.navigate('CartScreen')} style={[route === 'CartScreen' && styles.buttonColor, styles.button]}>
                        <Text style={[styles.buttonText, route === 'CartScreen' && styles.buttonTextColor]}>Your Cart</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navigation.navigate('FavouritesScreen')} style={[route === 'FavouritesScreen' && styles.buttonColor, styles.button]}>
                        <Text style={[styles.buttonText, route === 'FavouritesScreen' && styles.buttonTextColor]}>Favourites</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navigation.navigate('OrdersScreen')} style={[route === 'OrdersScreen' && styles.buttonColor, styles.button, styles.noMargin]}>
                        <Text style={[styles.buttonText, route === 'OrdersScreen' && styles.buttonTextColor]}>Your Orders</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.divider} />
                <TouchableOpacity onPress={() => props.navigation.navigate('StartScreen')}>
                        <Text style={styles.buttonText}>Sign Out</Text>
                    </TouchableOpacity>
            </DrawerContentScrollView>
        </Animated.View>
    );
};

export default DrawerContent;