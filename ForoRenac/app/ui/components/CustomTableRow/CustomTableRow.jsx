import { View, Text, StyleSheet } from "react-native";

const STATES = {
    0: "drafted",
    1: "registered",
    2: "closed"
}

const CustomTableRow = ({item}) => {
    return  (
        <View style={{flexDirection:"row"}}>
            <View style={styles.columnItem}>
                <Text style={styles.itemText}>{item.id}</Text>
            </View>
            <View style={styles.columnItem}>
                <Text style={styles.itemText}>{item.fecha}</Text>
            </View>
            <View style={styles.columnItem}>
                <Text style={STATES[item.estado]}>{item.estado}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    
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
        color: "red"
    },
});

export default CustomTableRow