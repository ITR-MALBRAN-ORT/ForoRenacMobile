import React from 'react';
import {
  Pressable,
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';

// Import vector icons
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import CustomInput from '../customInput/CustomInput';
import ForoRenac from '../ForoRenac';
import CustomButton from '../customButton/customButton';


export default LoginScreenUI = ({
  handleSubmit,
  saveEmail,
  savePassword,
  submitDisabled,
}) => {

  console.log('someeeee')
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={styles.container}>
     
        {/* Logo Foro Renac */}
        <ForoRenac />
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
            label="Contraseña"
            type="default"
            secureTextEntry={true}
            placeholder="*********"
            required={true}
            saveValue={savePassword}
          />
          {/* Button Submit */}
          <CustomButton
            text="Ingresar"
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