import React from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Pressable,
  Text
} from 'react-native';
import { colors } from '../../styles/Theme';

//Custom components
import CustomInputUI from '../../components/customInput/CustomInputUI';
import CustomButton from '../../components/customButton/customButton';

// SVG vectors
import SVGForoRenac from '../../../assets/images/VectorForoRenac.svg';
import i18n from '../../../assets/localization/i18n';

export default RegisterScreenUI = ({
  handleSubmit,
  handle,
  errors, 
  disabled,
  navigate
}) => {

  const {handleEmail, handlePassword, handleRepeatPassword,handleFullName,handleAddress, handleFloor,handleDepartment} = handle
  const {emailError,passwordError,repeatPasswordError,fullNameError,addressError,floorError,departmentError} = errors
  return (
    <ScrollView>
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      >
      
      {/* Add ScrollView only if is necessary */}
      {/* Logo SVGForoRenac */}
      <SVGForoRenac width={106} height={44} style={{marginTop: 50}}/>
      {/* Separator */}
      <View style={{marginBottom: 20}} />
      {/* Card */}
      <View style={styles.card}>
        {/* Nombre Completo */}
        <CustomInputUI
          icon="user"
          label={i18n.t('userName')}
          type="default"
          secureTextEntry={false}
          placeholder="Pedro Perez"
          saveValue={handleFullName}
          err={fullNameError}
        />
        {/* Dirección */}
        <CustomInputUI
          icon="home"
          label={i18n.t('address')}
          type="default"
          secureTextEntry={false}
          placeholder="Av. Santa Fé 234"
          required={true}
          saveValue={handleAddress}
          err={addressError}
        />
        <View style={styles.addressDetail}>
          <CustomInputUI
            label={i18n.t('floor')}
            type="default"
            secureTextEntry={false}
            placeholder="3"
            shortInput={true}
            saveValue={handleFloor}
            err={floorError}
          />
          <CustomInputUI
            label={i18n.t('department')}
            type="numeric"
            secureTextEntry={false}
            placeholder="26"
            shortInput={true}
            saveValue={handleDepartment}
            err={departmentError}
          />
        </View>
        {/* Input Email */}
        <CustomInputUI
          icon="email-outline"
          label={i18n.t('email')}
          type="email-address"
          secureTextEntry={false}
          placeholder="ejemplo@gmail.com"
          saveValue={handleEmail}
          err={emailError}
        />
        {/* Input Password */}
        <CustomInputUI
          icon="lock"
          label={i18n.t('password')}
          type="default"
          secureTextEntry={true}
          placeholder="*********"
          saveValue={handlePassword}
          err={passwordError}
        />
        <CustomInputUI
          label={i18n.t('repeatPassword')}
          type="default"
          secureTextEntry={true}
          placeholder="*********"
          saveValue={handleRepeatPassword}
          err={repeatPasswordError}
        />
        {/* Button Submit */}
        <CustomButton
          text={i18n.t('signUp')}
          onPress={handleSubmit}
          disabled={disabled}
        />
        {/*Navigate login*/}
        <Pressable onPress={()=>navigate('login')} style={{alignItems:'center'}}>
            <Text style={{color:'#00ccff'}}>¿Ya tienes Cuenta? Iniciar Sesion</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
      </ScrollView>
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
    backgroundColor: colors.WHITE,
    padding: 25,
    borderRadius: 7,
    marginBottom: 35
  },
  addressDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});