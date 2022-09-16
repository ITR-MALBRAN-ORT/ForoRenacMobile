import React from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native';

//Custom components
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/customButton';

// SVG vectors
import SVGForoRenac from '../../../assets/images/VectorForoRenac.svg';
import i18n from '../../../assets/localization/i18n';

export default LoginScreenUI = ({
  handleSubmit,
  submitDisabled,
}) => {
  return (
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
        <CustomInput
          icon="user"
          label={i18n.t('userName')}
          type="default"
          secureTextEntry={false}
          placeholder="Pedro Perez"
          required={true}
        />
        {/* Dirección */}
        <CustomInput
          icon="home"
          label={i18n.t('address')}
          type="default"
          secureTextEntry={false}
          placeholder="Av. Santa Fé 234"
          required={true}
        />
        <View style={styles.addressDetail}>
          <CustomInput
            label={i18n.t('floor')}
            type="default"
            secureTextEntry={false}
            placeholder="3"
            required={false}
            shortInput={true}
          />
          <CustomInput
            label={i18n.t('department')}
            type="numeric"
            secureTextEntry={false}
            placeholder="26"
            required={false}
            shortInput={true}
          />
        </View>
        {/* Input Email */}
        <CustomInput
          icon="email-outline"
          label="Email"
          type="email-address"
          secureTextEntry={false}
          placeholder="ejemplo@gmail.com"
          required={true}
        />
        {/* Input Password */}
        <CustomInput
          icon="lock"
          label={i18n.t('password')}
          type="default"
          secureTextEntry={true}
          placeholder="*********"
          required={true}
        />
        {/* Button Submit */}
        <CustomButton
          text={i18n.t('signUp')}
          onPress={handleSubmit}
          disabled={submitDisabled}
        />
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
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 7,
  },
  addressDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});