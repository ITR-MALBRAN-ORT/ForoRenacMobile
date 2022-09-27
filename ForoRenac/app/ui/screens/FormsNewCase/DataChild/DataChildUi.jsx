import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Select from '../../../components/Select/Select'
import { sexos, nacidos, provincias } from '../../../../helpers/data'
import { NEW_CASE } from '../../../../navigation/NavigationConstants'
export default function DataChildUi({handle, errors, disabled, navigationTo, values}) {
    const {saveNacido,saveProvincia,saveSex} = handle
    const {sexError, provinciaError, nacidoError} = errors
    const {sex, nacido, provincia} = values
  return (
    <View style={styles.cont}>
    <View style={styles.nav}>
      <Text style={styles.title}>Data Child</Text>
    </View>
    <View style={styles.form}>
      <Select items={sexos}  selectedValue={sex} onValueChange={saveSex} title={'Sexo'} err={sexError}></Select> 
      <Select items={provincias} selectedValue={provincia} onValueChange={saveProvincia} title={'Provincia'} err={provinciaError}></Select>
      <Select items={nacidos} selectedValue={nacido} onValueChange={saveNacido} title={'Estado Nacido'} err={nacidoError}></Select> 
      <View style={styles.contBtn}>
        <TouchableOpacity style={[styles.btn, {backgroundColor:'#278AB0'}]} onPress={()=>{ navigationTo(NEW_CASE.FORM_MALFORMATION)}} disabled={disabled}>
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
  })