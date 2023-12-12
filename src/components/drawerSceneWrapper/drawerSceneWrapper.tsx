import React from 'react'
import { useDrawerProgress, useDrawerStatus } from '@react-navigation/drawer';
import { Platform, SafeAreaView, View } from 'react-native';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import styles from './drawerSceneWrapper.styles';

type DrawerSceneWrapperProps = {
    children: React.ReactNode;
};

const DrawerSceneWrapper = ({ children }: DrawerSceneWrapperProps) => {
    const progress = useDrawerProgress();
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    rotate: `${interpolate(progress.value, [0, 1], [0, -12], 'clamp')}deg`,
                },
            ],
            marginLeft: interpolate(progress.value, [0, 1], [0, 70], 'clamp'),
            marginTop: interpolate(progress.value, [0, 1], [0, 10], 'clamp'),
            borderTopLeftRadius: Platform.OS === 'android' ? interpolate(progress.value, [0, 1], [0, 40], 'clamp') : 40,
        };
    });

    const topStyle = useAnimatedStyle(() => {
        return {
            marginTop: interpolate(progress.value, [0, 1], [0, 50], 'clamp'),
        };
    });

    const rectangle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: interpolate(progress.value, [0, 0.1], [0, 50], 'clamp'),
                },
                {
                    translateY: interpolate(progress.value, [0, 0.1], [0, 50], 'clamp'),
                },
            ],
        };
    });

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.bgScreen, topStyle]}>
                {Platform.OS === 'ios' && <Animated.View style={[styles.rectangle, rectangle]} />}
                <Animated.View style={[styles.mainScreen, animatedStyle]}>
                    <SafeAreaView>
                        {children}
                    </SafeAreaView>
                </Animated.View>
            </Animated.View>
        </View>
    )
}

export default DrawerSceneWrapper;