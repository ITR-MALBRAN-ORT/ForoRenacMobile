import { View, Text, StyleSheet,Pressable  } from "react-native";
import i18n from '../../../assets/localization/i18n';
import { LANDING_STACK } from "../../../navigation/NavigationConstants";

const STATES = {
    0: "drafted",
    1: "registered",
    2: "closed"
}

const CustomTableRow = ({item, navigation}) => {
    return  (
        <Pressable style={styles.rowDetail} onPress={() => navigation.navigate(LANDING_STACK.DETAIL_SCREEN, {id:item.id})}>
            <View style={styles.columnItem}>
                <Text style={styles.itemText}>{item.id}</Text>
            </View>
            <View style={styles.columnItem}>
                <Text style={styles.itemText}>{item.fecha}</Text>
            </View>
            <View style={styles.columnItem}>
                <Text style={styles[STATES[item.estado]]}>{i18n.t(STATES[item.estado])}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    rowDetail: {
        flexDirection: "row"
    },
    columnItem: {
        justifyContent: "center",
        alignItems: "center",
        width: (354 / 3),
        height: 50,
        backgroundColor: "#fff"
    },
    drafted: {
        color: "#9CABC2"
    },
    registered: {
        color: "#1DC690"
    },
    closed: {
        color: "#278AB0"
    },
    itemText: {
        color: "#287AB0"
    },
});

export default CustomTableRow