import { StyleSheet } from "react-native";
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
        backgroundColor: 'white',
        borderTopLeftRadius: 40,
    }
});

export default styles;