import { View, Text, StyleSheet,ScrollView, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomInputUI from '../../../components/customInput/CustomInputUI'
import i18n from '../../../../assets/localization/i18n'
import { NEW_CASE } from '../../../../navigation/NavigationConstants'
export default function DataMotherUi({handle, errors, disabled, navigationTo}) {
    const {saveFullName, saveTelephone, saveEmail} = handle
    const {fullNameError, telephoneError, emailError} = errors
  return (
    <View style={styles.cont}>
      <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.nav}>
         <Text style={styles.title}>Nuevo caso </Text>
         <Text style={styles.title2}>Datos de la madre </Text>
        </View>
      <View style={styles.form}>

        <CustomInputUI
          icon="user"
          label={i18n.t('userName')}
          type="default"
          secureTextEntry={false}
          placeholder="Sandra Sosa"
          saveValue={saveFullName}
          err={fullNameError}
        />
        
        <CustomInputUI
          icon="email-outline"
          label={i18n.t('email')}
          type="email-address"
          secureTextEntry={false}
          placeholder="ejemplo@gmail.com"
          saveValue={saveEmail}
          err={emailError}
        />
        <CustomInputUI
          icon="phone"
          label={i18n.t('phone')}
          type='number-pad'
          secureTextEntry={false}
          placeholder={'2616713330'}
          saveValue={saveTelephone}
          err={telephoneError}
        />
           
            <View style={styles.contBtn}>
                <TouchableOpacity style={styles.btn} onPress={()=> navigationTo(NEW_CASE.FORM_FATHER)} disabled={disabled}>
                  <Text style={styles.titleButton}>Siguiente</Text>
                </TouchableOpacity>
            </View>
      </View>
      </ScrollView>
      </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
    cont:{
      flex:1,
    },
    nav:{
      height:70,
      alignItems:'center',
      justifyContent:'center',
      
    },
    titleButton:{
      fontSize:15,
      color:'#fff'
    },
    title:{
      fontSize:20,
      marginBottom: 20,
      marginRight: 240,
      marginTop: 25
    },
    title2:{
      fontSize:18,
      color:'black',
      marginRight: 200
    },
    form:{
      marginTop:30,
      justifyContent:'space-between',
      alignItems:'center'
    },
    contBtn:{
      justifyContent:'center',
      alignItems:'center',
    },
    btn:{
      marginVertical:20,
      borderRadius:20,
      width:130,
      height:35,
      backgroundColor:'#278AB0',
      justifyContent:'center',
      alignItems:'center',
    }
  })