import React from 'react';
import {
  Button,
  Pressable,
  Text,
  TextInput,
  View,
  StyleSheet,
} from 'react-native';
import { colors } from '../../styles/Theme';

export default CustomButtonUI = ({text, onPress, disabled}) => {
  return (
    <View style={styles.container}>
      <Pressable style={disabled? styles.buttonDisabled : styles.button} onPress={onPress} disabled = {disabled}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:10,
    marginTop:20
  },
  button: {
    width: 192,
    height: 33,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 22,
    backgroundColor: '#1DC690',
  },
  buttonDisabled:{
    width: 192,
    height: 33,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 22,
    backgroundColor: '#EBEBE4',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: colors.WHITE,
  },
});
