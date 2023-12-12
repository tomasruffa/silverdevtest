import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './header.styles';
import { NavigationProp, useNavigation } from '@react-navigation/native';

type HeaderProps = {
    title: string;
}
const Header = ({title}: HeaderProps) => {
    const navigation: NavigationProp<ReactNavigation.RootParamList> & { openDrawer: () => void} = useNavigation();

    return (
    <View style={{ flexDirection: 'row', marginHorizontal: 16, alignItems: 'center', marginTop: 20 }}>
                <TouchableOpacity onPress={navigation.openDrawer}>
                    <Image
                        source={require('../../assets/menu.png')}
                        style={styles.menu}
                    />
                </TouchableOpacity>
                <Text style={styles.title}>{title}</Text>
            </View>
    )
}

export default Header;