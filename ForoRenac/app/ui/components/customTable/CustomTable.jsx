import { View, FlatList, Text, StyleSheet, Dimensions } from "react-native";

const DATA = [
    {id: 1223, fecha: "09/06", estado: "En borrador" },
    {id: 1224, fecha: "09/06", estado: "Registrado" },
    {id: 1225, fecha: "09/06", estado: "Cerrado" },
]

const windowWidth = Dimensions.get('window').width;

const CustomTable = () => {
    const item = ({item}) => {
        return  (
            <View style={{flexDirection:"row"}}>
                <View style={styles.columnItem}>
                    <Text style={styles.itemText}>{item.id}</Text>
                </View>
                <View style={styles.columnItem}>
                    <Text style={styles.itemText}>{item.fecha}</Text>
                </View>
                <View style={styles.columnItem}>
                    <Text style={styles.itemText}>{item.estado}</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.columnNames}>
                <View style={styles.columnName}>
                    <Text style={styles.columnTitle}>Historia Clinica</Text>
                </View>
                <View style={styles.columnName}>
                    <Text style={styles.columnTitle}>Fecha</Text>
                </View>
                <View style={styles.columnName}>
                    <Text style={styles.columnTitle}>Estado caso</Text>
                </View>
            </View>
            <FlatList
                data={DATA}
                renderItem={item}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        borderRadius: 5,
        overflow: "hidden"
    },
    columnNames: {
        height: 50,
        borderTopLeftRadius: 15,
        flexDirection: "row",
        textAlign: "center"
    },
    columnName: {
        justifyContent: "center",
        alignItems: "center",
        width: windowWidth / 3,
        height: 50,
        backgroundColor: "#287AB0"
    },
    columnItem: {
        color: "#287AB0",
        justifyContent: "center",
        alignItems: "center",
        width: windowWidth / 3,
        height: 50,
        backgroundColor: "#fff"
    },
    itemText: {
        color: "#287AB0"
    },
    columnTitle: {
        color: "#fff"
    }
});

export default CustomTable