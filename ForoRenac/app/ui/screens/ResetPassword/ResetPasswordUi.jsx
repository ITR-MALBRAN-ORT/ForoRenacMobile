import { View, Text, StyleSheet,TouchableOpacity,KeyboardAvoidingView ,ScrollView } from 'react-native'
import React from 'react'
import SVGForoRenac from '../../../assets/images/VectorForoRenac.svg';
import i18n from '../../../assets/localization/i18n';
export default function ResetPasswordUi({confirmNewPassword, saveNewPassword,saveRepeatPassword, errors,disabled}) {
  const {newPasswordError, repeatPasswordError} = errors
  return (
    <View style={styles.cont}>
        <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contLogo}>
            <SVGForoRenac width={150} height={70} fill={'white'}/>
        </View>
        <Text style={styles.tittle}>Change password</Text>
        <View style={styles.form}>
            <CustomInputUI
                    icon="lock"
                    label={i18n.t('password')}
                    type="default"
                    secureTextEntry={true}
                    placeholder="*********"
                    saveValue={saveNewPassword}
                    err={newPasswordError}
            />
            <CustomInputUI
                    label={i18n.t('repeatPassword')}
                    type="default"
                    secureTextEntry={true}
                    placeholder="*********"
                    saveValue={saveRepeatPassword}
                    err={repeatPasswordError}
            />
           <View style={styles.contBtn}>
                <TouchableOpacity 
                    style={[styles.btn, {backgroundColor: disabled ? '#BF4B5E': '#1DC690'}]} 
                    disabled={disabled}
                    onPress={confirmNewPassword}
                    >
                    
                    <Text style={{color:'#fff', fontSize:15}}>Confirm</Text>
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
        backgroundColor:'#1C4670',
        flex:1,
        alignItems:'center'
    },
    contLogo:{
        marginBottom:20,
        marginTop:40
    },
    tittle:{
        fontSize:25,
        textTransform:'capitalize',
        color:'#ffffff'
    },
    form:{
        backgroundColor:'#ffffff',
        height:350,
        width:310,
        borderRadius:10,
        justifyContent:'space-around',
        marginVertical:20,
        padding:20
    },
    contBtn:{
        alignItems:'center',
        padding:20,
    },
    btn:{
        width:190,
        alignItems:'center',
        height:30,
        justifyContent:'center',
        borderRadius:50,
    },

})