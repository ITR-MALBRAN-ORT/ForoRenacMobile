import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';

export default function CustomRadio({Selected, Label, cb}) {
  return (
    <Pressable onPress={cb}>
      <View style={styles.Container}>
        <Text style={styles.Label}>{Label}</Text>
        <View style={styles.Button}>
          {Selected ? <View style={styles.Filler} /> : null}
        </View>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    marginTop: 15
  },
  Button: {
    height: 24,
    width: 24,
    marginLeft: 5,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Filler: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#000',
  },
  Label:{
    fontSize:18,
    textAlign: "center",
    alignContent: "center"
  }
});
