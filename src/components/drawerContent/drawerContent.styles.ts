import { StyleSheet } from "react-native";
import { defaultColors } from "../../global-styles/global-styles";

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        position: 'relative'
    },
    bar: {
        height: '100%',
        position: 'absolute',
        top:0,
        backgroundColor: defaultColors.darkBlue,
        zIndex: 1,
        right: 0,
        width:1
    },
    drawerContent: {
        backgroundColor: defaultColors.darkBlue,
        borderTopLeftRadius: 40
    },
    drawerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        width: '100%'
    },
    title: {
        color: defaultColors.white,
        fontSize: 26,
        fontWeight: '600'
    },
    itemsContainer: {
        marginTop: 50,
        width: 130,
        marginLeft: 20
    },
    buttonColor: {
        backgroundColor: defaultColors.redBtn,
    },
    button: {
        flex: 1,
        borderRadius:10,
        justifyContent: 'center',
        marginBottom: 20,
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    noMargin: {
        marginBottom: 0
    },
    buttonText: {
        color: defaultColors.white,
        fontSize: 16,
        fontWeight: '500'
    },
    buttonTextColor: {
        color: defaultColors.redStrong
    },
    divider: {
        width: 130,
        height: 1,
        backgroundColor: defaultColors.grayChateau,
        marginVertical: 40,
        marginLeft: 20
    }
});

export default styles;