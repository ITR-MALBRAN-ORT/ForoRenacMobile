import { StyleSheet } from "react-native"

const colors = {
    PRIMARY: "#1C4670",
    SECONDARY: "#278AB0",
    ALERT: "#BF4B5E",
    SUCCESS: "#1DC690",
    DISABLED: "#9CABC2"
}

const fonts = {
    FONTFAMILY: "Montserrat",
    SMALL: 14,
    MEDIUM: 18,
    LARGE: 22,
    THIN: "300", 
    LIGHT: "400",
    SEMIBOLD: "500",
    BOLD: "700"
}

const sizes = {
    ROUNDED: 5,
    ROUNDEDLG: 22,
    TABHEIGHT: 50,
    TABHEIGHTLG: 100 
}

/* PRESETS */
export const presets = StyleSheet.create({
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
        borderColor: "red"
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
    }
}); 