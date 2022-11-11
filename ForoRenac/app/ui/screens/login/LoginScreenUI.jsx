import React from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
} from 'react-native';
import { colors } from '../../styles/Theme';

//Custom components
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/customButton';
import { LOGIN_STACK } from '../../../navigation/NavigationConstants';
// SVG vectors
import SVGForoRenac from '../../../assets/images/VectorForoRenac.svg';
import i18n from '../../../assets/localization/i18n';
import CustomInputUI from '../../components/customInput/CustomInputUI';

export default LoginScreenUI = ({
  handleSubmit,
  handleEmail,
  handlePassword,
  errorEmail,
  errorPassword,
  disabled,
  navigate,
}) => {

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={styles.container}>
      {/* Add ScrollView only if is necessary */}
      {/* Logo SVGForoRenac */}
      <SVGForoRenac width={106} height={44} />
      {/* Separator */}
      <View style={{marginBottom: 35}} />
      {/* Card */}
      <View style={styles.card}>
        {/* Input Email */}
        <CustomInputUI
          icon="email-outline"
          label="Email"
          type="email-address"
          secureTextEntry={false}
          placeholder="ejemplo@gmail.com"
          onEndEditing={handleEmail}
          err={errorEmail}
        />
        {/* Input Password */}
        <CustomInputUI
          icon="lock"
          label={i18n.t('password')}
          type="default"
          secureTextEntry={true}
          placeholder="*********"
          onEndEditing={handlePassword}
          err={errorPassword}
        />
        <Pressable onPress={()=>navigate(LOGIN_STACK.PASSWORD_RECOVERY_SCREEN)} style={{alignItems:'center'}}>
            <Text style={{color:'#00ccff'}}>Forgot your password?</Text>
        </Pressable>
        {/* Button Submit */}
        <CustomButton
          text={i18n.t('login')}
          onPress={handleSubmit}
          disabled={disabled}
        />
        {/*Register*/}
        <Pressable onPress={()=>navigate('register')} style={{alignItems:'center'}}>
            <Text style={{color:'#00ccff'}}>¿No tienes Cuenta? Registrarse</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1C4670',
  },
  card: {
    justifyContent: 'center',
    backgroundColor: colors.WHITE,
    padding: 25,
    borderRadius: 7,
  },
  contBtn:{
    alignItems:'center'
  },
});