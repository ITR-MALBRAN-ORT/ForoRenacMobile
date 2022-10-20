import React from 'react';
import {View, Text, TextInput, StyleSheet, ScrollView, FlatList} from 'react-native';
import CustomTableRow from '../../components/CustomTableRow/CustomTableRow';
import {DATA} from './data.js';
import Feather from 'react-native-vector-icons/Feather';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCases } from '../../../redux/slices/Cases';
const LandingScreen = ({ navigation }) => {
  const {cases} = useSelector(state => state.cases)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getCases())

  },[])
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.filterContainer}>
          <TextInput style={styles.searchBar} >
            <Feather name="search" size={24} style={styles.searchBarIcon} />
          </TextInput>
          <Feather name="filter" size={24} style={styles.searchBarIcon}/>
        </View>
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
        data={cases}
        renderItem={CustomTableRow}
        keyExtractor={item => item.id}
      />
    </View>
    </View>
  )
}
/*<ScrollView>
        {cases.map((item) => {
          return <CustomTableRow item={item} navigation={navigation} key={item.id}></CustomTableRow>
        })}
      </ScrollView> */

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      marginBottom: 100
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
  },
  searchBar: {
    width: 320,
    height: 44,
    backgroundColor: "#E8E8E8",
    borderRadius: 22,
    marginTop: 13,
    marginBottom: 13
  },
  searchBarIcon: {
    color: "#1C4670"
  },
  filterContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
});

export default LandingScreen;