import { View, Text, StyleSheet,ScrollView, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomInputUI from '../../../components/customInput/CustomInputUI'
import i18n from '../../../../assets/localization/i18n'
import { NEW_CASE } from '../../../../navigation/NavigationConstants'
import { colors } from '../../../styles/Theme'
export default function DataFatherUi({handle, errors, disabled, navigationTo}) {
    const {saveFullName, saveTelephone, saveEmail} = handle
    const {fullNameError, telephoneError, emailError} = errors
  return (
    <View style={styles.cont}>
      <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.nav}>
        <Text style={styles.title}>Data Father </Text>
      </View>
      <View style={styles.form}>

        <CustomInputUI
            icon="user"
            label={i18n.t('userName')}
            type="default"
            secureTextEntry={false}
            placeholder="Jorge Sosa"
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
                <TouchableOpacity style={[styles.btn,{ backgroundColor:'#c0c0c0'}]} onPress={()=> navigationTo(NEW_CASE.FORM_CHILD)}>
                  <Text style={styles.title}>Omitir</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn,{ backgroundColor:'#278AB0'}]} onPress={()=> navigationTo(NEW_CASE.FORM_CHILD)} disabled={disabled}>
                  <Text style={styles.title}>Siguiente</Text>
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
      justifyContent:'center',
      alignItems:'center',
    }
  })