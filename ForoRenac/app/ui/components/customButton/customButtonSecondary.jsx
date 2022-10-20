import React from 'react';
import {
  Pressable,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import { colors } from '../../styles/Theme';

export default CustomButtonSecondary = ({text, onPress, disabled}) => {
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
    marginTop:20,
    borderWidth: 1,
    borderColor: colors.PRIMARY,
    borderRadius: 20,
  },
  button: {
    minWidth: '97%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 22,
    backgroundColor: 'transparent',
    paddingVertical: 3,
    paddingHorizontal: 10
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
    fontSize: 14,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: colors.PRIMARY,
  },
});
