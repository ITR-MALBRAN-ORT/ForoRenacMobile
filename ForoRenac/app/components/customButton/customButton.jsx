import React from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import CustomButtonUI from './customButtonUI';

export default CustomButton = ({text, onPress, disabled}) => {
  //TODO si no hay lógica eliminar este componente
  return <CustomButtonUI text={text} onPress={onPress} disabled={disabled} />;
};
