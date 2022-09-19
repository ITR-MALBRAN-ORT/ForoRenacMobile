import React from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
} from 'react-native';

//Custom components
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/customButton';

// SVG vectors
import SVGForoRenac from '../../../assets/images/VectorForoRenac.svg';
import i18n from '../../../assets/localization/i18n';
import CustomInputUI from '../../components/customInput/CustomInputUI';

export default LoginScreenUI = ({
  handleSubmit,
  handleEmail,
  handlePassword,
  errorPassword,
  errorEmail,
  disabled,
  navigateRegister,
}) => {
  
  // TODO remove this - TESTING I18N translation

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
          saveValue={handleEmail}
          err={errorEmail}
        />
        {/* Input Password */}
        <CustomInputUI
          icon="lock"
          label={i18n.t('password')}
          type="default"
          secureTextEntry={true}
          placeholder="*********"
          saveValue={handlePassword}
          err={errorPassword}
        />
        {/* Button Submit */}
        <CustomButton
          text={i18n.t('login')}
          onPress={handleSubmit}
          disabled={disabled}
        />
        {/*Register*/}
        <Pressable onPress={()=>navigateRegister('register')} style={{alignItems:'center'}}>
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
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 7,
  },
  contBtn:{
    alignItems:'center'
  },
});