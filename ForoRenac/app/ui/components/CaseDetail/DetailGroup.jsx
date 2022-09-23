import { View, ScrollView, Text, StyleSheet } from "react-native"

const DetailGroup = ({titles, data}) => {
    return (
        <View style={styles.detailGroup}>
            {titles.map((title, index) => {
                return(
                    <View style={styles.detail}>
                        <Text style={styles.detailTitle}>{title.toUpperCase()}:</Text>
                        <Text style={styles.detailDesc}>{data[index]}</Text>
                    </View>
                )
            })}
            {/* {data.map((item) => {
                <View style={styles.detail}>
                    <Text style={styles.detailTitle}>{item.title}:</Text>
                    <Text>{item.data}</Text>
                </View>
            })} */}
        </View>
    )
}

const styles = StyleSheet.create({
    detailGroup: {
        borderBottomWidth: 1,
        borderColor: "#BCBCBC",
        marginTop: 13,
        width: 354,
    },
    detail: {
        flexDirection: "row",
        marginBottom: 13,
        marginLeft: 13
    },
    detailTitle: {
        width: "30%",
        fontSize: 14,
        color: "#1C4670",
        fontWeight: "bold"
    },
    detailDesc: {
        flex: 1,
        fontSize: 14,
        color: "#1C4670"
    }
});

export default DetailGroup