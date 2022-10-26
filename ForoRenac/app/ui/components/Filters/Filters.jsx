import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../../styles/Theme'

export default function Filters({options, selected, setter}) {
  return (
    <View style={styles.container}>
    {
        options.map((e, index) => (
            <Pressable style={[styles.option, selected === e ? {borderColor: colors.PRIMARY} : null ]} onPress={()=>setter(e)}>
                <Text style={[styles.text, selected === e ? {color: colors.PRIMARY} : null ]}>{e}</Text>
            </Pressable>
        ))
        
    }
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 20,
    },
    option:{
        padding: 10,
        marginLeft: 5,
        marginRight: 5,
        borderWidth: 0,
        borderBottomWidth: 4,
        borderColor: "#1C46704D",
        justifyContent: "center"
    },
    text: {
        fontSize: 14,
        fontWeight: "600",
        textAlign: 'center',
        color: "#1C46704D"
    }

})