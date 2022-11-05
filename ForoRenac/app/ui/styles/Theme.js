import { StyleSheet } from "react-native"

const colors = {
    PRIMARY: "#1C4670",
    SECONDARY: "#278AB0",
    ALERT: "#BF4B5E",
    SUCCESS: "#1DC690",
    DISABLED: "#9CABC2",
    WHITE: "#fff",
    BLACK: "#000"
}

const fonts = {
    FONTFAMILY: "Montserrat",
    SMALL: 14,
    MEDIUM: 18,
    LARGE: 22,
    THIN: "300", 
    LIGHT: "normal",
    SEMIBOLD: "semibold",
    BOLD: "bold"
}

const sizes = {
    ROUNDED: 5,
    ROUNDEDLG: 22,
    TABHEIGHT: 50,
    TABHEIGHTLG: 100 
}

/* PRESETS */
const presets = StyleSheet.create({
    textPreset1: {
        fontFamily: fonts.FONTFAMILY,
        fontSize: fonts.SMALL,
        fontWeight: fonts.LIGHT,
        color: colors.ALERT
    },
    textPreset2: {
        fontFamily: fonts.FONTFAMILY,
        fontSize: fonts.SMALL,
        fontWeight: fonts.SEMIBOLD,
        color: colors.SUCCESS
    },
    textPreset3: {
        fontFamily: fonts.FONTFAMILY,
        fontSize: fonts.SMALL,
        fontWeight: fonts.BOLD,
        color: colors.PRIMARY
    },
    formContainer: {
        width: 354,
        marginTop: 13, 
        borderWidth: 1,
        borderColor: "blue"
    },
    btnPreset1: {
        width: 192,
        height: 33,
        borderRadius: sizes.ROUNDEDLG
    },
    btnPreset2: {
        width: 90,
        height: 33,
        borderRadius: sizes.ROUNDEDLG, 
    },
    centerContent: {
        justifyContent: "center",
        alignItems: "center"
    }
});

export { presets, colors, fonts, sizes };