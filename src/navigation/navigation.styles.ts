import { StyleSheet } from "react-native";
import { defaultColors } from "../global-styles/global-styles";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerStyle: {
        flex: 1,
        width: '40%',
    },
    sceneContainerStyle: {
        backgroundColor: defaultColors.darkBlue,
    }
});

export default styles;
