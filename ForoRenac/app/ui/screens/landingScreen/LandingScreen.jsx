import React from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import {CustomTableRow} from '../../components/CustomTableRow/CustomTableRow';
import { DATA } from './data';

export default function LandingScreen() {
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
        renderItem={CustomTableRow}
        keyExtractor={(item, index) => index.toString()}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      width: "100%"
  },
  columnNames: {
      height: 50,
      borderTopLeftRadius: 15,
      flexDirection: "row",
      textAlign: "center",
      borderTopRightRadius: 5,
      borderTopLeftRadius: 5,
      overflow: "hidden"
  },
  columnName: {
      justifyContent: "center",
      alignItems: "center",
      width: (354 / 3),
      height: 50,
      backgroundColor: "#287AB0"
  },
  columnItem: {
      color: "#287AB0",
      justifyContent: "center",
      alignItems: "center",
      width: (354 / 3),
      height: 50,
      backgroundColor: "#fff"
  },
  columnTitle: {
      color: "#fff"
  }
});