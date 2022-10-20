import { View, Text, StyleSheet,Pressable} from 'react-native'
import React from 'react'
import SVGForoRenac from '../../../assets/images/VectorForoRenac.svg';
import CustomInputUI from '../../components/customInput/CustomInputUI';
import { LOGIN_STACK } from '../../../navigation/NavigationConstants';
import i18n from '../../../assets/localization/i18n';
import { colors } from '../../styles/Theme';

export default function PasswordRecoveryUi({error,handleEmail, disable, sendRecoveryEmail, navigationTo}) {
  return (
    <View style={style.container}>
    <View style={style.contLogo}>
      <SVGForoRenac  width={150} height={70} fill={colors.WHITE}/>
    </View>
    <Text style={style.titulo}>Recuperar Cuenta</Text>
    <View style={style.form}>
        <CustomInputUI
          icon="email-outline"
          label={i18n.t('email')}
          type="email-address"
          secureTextEntry={false}
          placeholder="ejemplo@gmail.com"
          saveValue={handleEmail}
          err={error}
        />
    <View style={style.contBtn}>
          <Pressable onPress={sendRecoveryEmail} style={[style.btn,{backgroundColor: disable ?'red':'#1DC690'}]} disabled={disable}>
            <Text style={{color:colors.WHITE}}>Recuperar Cuenta</Text>
          </Pressable>
          <Pressable style={{marginTop:10}} onPress={()=>navigationTo(LOGIN_STACK.LOGIN_SCREEN)}>
            <Text style={{color:'#1A4653'}}>Volver al Iniciar Sesion</Text>
          </Pressable>
    </View>
    </View>
  </View>
  )
}

const style = StyleSheet.create({
    container:{
      backgroundColor:'#1C4670',
      flex:1,
      alignItems:'center',
    },
    contLogo:{
      marginVertical:50,
    },
    titulo:{
      fontSize:25,
      color:colors.WHITE,
    },
    form:{
      backgroundColor:colors.WHITE,
      width:310,
      borderRadius:10,
      padding:10,
      marginTop:15,
    },
    contBtn:{
      alignItems:'center',
      padding:15
    },
    btn:{
      width:190,
      alignItems:'center',
      height:30,
      justifyContent:'center',
      borderRadius:50,
    },
  
  
  })