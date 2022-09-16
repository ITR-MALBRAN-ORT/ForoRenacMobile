import React from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

//Custom components
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/customButton';

// SVG vectors
import SVGForoRenac from '../../../assets/images/VectorForoRenac.svg';
import i18n from '../../../assets/localization/i18n';

export default LoginScreenUI = ({
  handleSubmit,
  saveEmail,
  savePassword,
  submitDisabled,
}) => {
  
  // TODO remove this - TESTING I18N translation
  console.log('i18n Test', i18n.t('tabDevices'));

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
        <CustomInput
          icon="email-outline"
          label="Email"
          type="email-address"
          secureTextEntry={false}
          placeholder="ejemplo@gmail.com"
          required={true}
          saveValue={saveEmail}
        />
        {/* Input Password */}
        <CustomInput
          icon="lock"
          label={i18n.t('password')}
          type="default"
          secureTextEntry={true}
          placeholder="*********"
          required={true}
          saveValue={savePassword}
        />
        {/* Button Submit */}
        <CustomButton
          text={i18n.t('login')}
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
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 7,
  },
});