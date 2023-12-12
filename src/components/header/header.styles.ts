import { StyleSheet } from "react-native";
import { defaultColors } from "../../global-styles/global-styles";

const styles = StyleSheet.create({
    menu: {
        width: 25,
        height: 25,
        opacity: 0.4
    },
    title: {
        marginLeft: 20,
        textTransform: 'uppercase',
        letterSpacing: 2,
        fontSize: 22,
        color: defaultColors.grayLight
    }
});

export default styles;