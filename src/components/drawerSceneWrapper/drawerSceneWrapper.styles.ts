import { Platform, StyleSheet } from "react-native";
import { defaultColors } from "../../global-styles/global-styles";

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        backgroundColor: defaultColors.white
    },
    bgScreen: {
        flex: 1,
        backgroundColor: defaultColors.darkBlue,
        position: 'relative'
    },
    mainScreen: {
        flex: 1,
        backgroundColor: defaultColors.white,
        borderTopLeftRadius: Platform.OS === 'android' ? 0 : 40,
    },
    rectangle: {
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: defaultColors.white,
        width: 50,
        height:50
    }
});

export default styles;