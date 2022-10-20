import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Select from '../../../components/Select/Select'
import { estadoEstudios } from '../../../../helpers/data'
import { LOGIN_STACK } from '../../../../navigation/NavigationConstants'
import { colors } from '../../../styles/Theme'
export default function DataEstudiosUi({handle, errors, disabled, navigationTo, values}) {
    const {saveEstado} = handle
    const {estadoError} = errors
    const {estado} = values
  return (
    <View style={styles.cont}>
    <View style={styles.nav}>
      <Text style={styles.title}>Data Estado estudios</Text>
    </View>
    <View style={styles.form}>
      <Select items={estadoEstudios}  selectedValue={estado} onValueChange={saveEstado} title={'Estado estudios'} err={estadoError}></Select> 
      <View style={styles.contBtn}>
        <TouchableOpacity style={[styles.btn, {backgroundColor:'#278AB0'}]} onPress={()=>{console.log('Guardando Caso')}} disabled={disabled}>
          <Text style={styles.title}>Finalizar</Text>
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
      color:colors.WHITE
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