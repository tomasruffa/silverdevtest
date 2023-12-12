import React from 'react';
import { View } from 'react-native';
import {
    createDrawerNavigator,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import DrawerContent from '../components/drawerContent/drawerContent';
import styles from './navigation.styles';
import { TabBar } from './tab-bar/tab-bar.component';
import { defaultColors } from '../global-styles/global-styles';
import { navigationRef } from '../utils/root-navigation';

const Drawer = createDrawerNavigator();

const Navigation = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <View style={styles.container}>
                <Drawer.Navigator
                    backBehavior="none"
                    initialRouteName="StartScreen"
                    screenOptions={{
                        headerShown: false,
                        overlayColor: defaultColors.transparent,
                        drawerStyle: styles.drawerStyle,
                        sceneContainerStyle: styles.sceneContainerStyle,
                        drawerType: 'slide',
                    }}
                    drawerContent={(props) => <DrawerContent {...props} />}
                    >
                        <Drawer.Screen name="TabNavigator" component={TabBar}/>
                </Drawer.Navigator>
            </View>
        </NavigationContainer>
    );
};

export default Navigation;