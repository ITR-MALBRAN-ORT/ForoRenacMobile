import { View, Text,StyleSheet,TouchableOpacity, TextInput  } from 'react-native'
import React from 'react'
import { malformations } from '../../../../helpers/data'
import Select from '../../../components/Select/Select'
import { NEW_CASE } from '../../../../navigation/NavigationConstants'
export default function DataMalformationUi({handle, errors, disabled, navigationTo, values}) {
    const {saveDescription, saveMalformation} = handle
    const {malformationError, descriptionError} = errors
    const {malformation} = values
  return (
    <View style={styles.cont}>
    <View style={styles.nav}>
      <Text style={styles.title}>Data Malformation</Text>
    </View>
    <View style={styles.form}>
      <Select items={malformations}  selectedValue={malformation} onValueChange={saveMalformation} title={'Type Malformation'} err={malformationError}></Select> 
      <View>
        <Text style={[styles.title, {color:'#000000', marginVertical:10}]}>Description</Text>
        <TextInput
            multiline
            style={styles.multiline}
            numberOfLines={4}
        />
      </View>
      <View style={styles.contBtn}>
        <TouchableOpacity style={[styles.btn, {backgroundColor:'#278AB0'}]} onPress={()=>{ navigationTo(NEW_CASE.FORM_ESTUDIOS)}}>
          <Text style={styles.title}>Siguiente</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
    cont:{
      flex:1,
    },
    nav:{
      backgroundColor:'#278AB0',
      height:50,
      marginTop:15,
      alignItems:'center',
      justifyContent:'center'
    },
    title:{
      fontSize:15,
      color:'#fff'
    },
    form:{
      marginHorizontal:35,
      marginTop:30,
      justifyContent:'space-between',
      flex:1,
    },
    contBtn:{
      justifyContent:'center',
      alignItems:'center',
      marginVertical:25,
    },
    btn:{
      marginVertical:5,
      borderRadius:20,
      width:130,
      height:35,
      justifyContent:'center',
      alignItems:'center',
    },
    multiline:{
        borderColor: '#000000',
        borderWidth: 1,
    }
  })