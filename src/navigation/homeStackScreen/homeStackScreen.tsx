import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Start from '../../screens/home/start/start';
import Secondary from '../../screens/home/secondaryScreen/secondaryScreen';

const StackScreen = createStackNavigator();

const HomeStackScreen = () => {
    return (
        <StackScreen.Navigator>
            <StackScreen.Screen name="StartScreen" component={Start} options={{headerShown: false}}/>
            <StackScreen.Screen name="SecondaryScreen" component={Secondary} options={{headerShown: false}}/>
        </StackScreen.Navigator>
    )
}

export default HomeStackScreen;