import React from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';

// Import vector icons
// import Icon from 'react-native-vector-icons/FontAwesome';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import Fontisto from 'react-native-vector-icons/Fontisto';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

export default CustomInputUI = props => {
  const {
    icon,
    label,
    type,
    placeholder,
    errorMessage,
    onEndEditing,
    secureTextEntry,
    shortInput
  } = props;

  getIcon = () => {
    let iconFound;
    if(icon === 'lock') {
      iconFound = <Feather name={icon} size={24} />
    } else if(icon === 'email-outline') {
      iconFound = <MCIcon name={icon} size={24} />
    } else if(icon === 'user'){
      iconFound = <Feather name={icon} size={24} />
    } else {
      iconFound = <Feather name={icon} size={24} />
    }

    return iconFound;
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconAndLabel}>
        {getIcon(icon)}
        <Text style={styles.label}>{label}</Text>
      </View>
      <TextInput
        style={[errorMessage ? styles.inputError : styles.input, shortInput ? styles.shortInput : ""]}
        placeholder={placeholder}
        keyboardType={type}
        secureTextEntry={secureTextEntry}
        onEndEditing={e => onEndEditing(e.nativeEvent.text)}
      />
      <Text style={errorMessage ? styles.error : styles.hide}>
        {' '}
        {errorMessage}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginBottom: 20,
  },
  iconAndLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 7,
  },
  shortInput: {
    width: 120
  },
  input: {
    height: 40,
    width: 273,
    padding: 10,
    paddingTop: 15,
    backgroundColor: '#E8E8E8',
    fontSize: 15,
    borderRadius: 5,
    marginVertical:2
  },
  label: {
    marginStart: 7,
  },
  error: {
    color: 'red',
    maxWidth: 273,
  },
  inputError: {
    height: 40,
    width: 273,
    padding: 10,
    paddingTop: 15,
    backgroundColor: '#E8E8E8',
    fontSize: 15,
    borderRadius: 5,
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: 1,
    marginVertical:2
  },
  hide: {
    display: 'none',
  },
  estilo1: {
    borderColor: 'green',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  estilo2: {
    borderRadius: 15
  }
});
