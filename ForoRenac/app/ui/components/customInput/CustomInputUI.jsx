import React from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';

// Import vector icons
// import Icon from 'react-native-vector-icons/FontAwesome';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import Fontisto from 'react-native-vector-icons/Fontisto';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {colors} from '../../styles/Theme';

export default CustomInputUI = props => {
  const {icon, type, placeholder,value, onEndEditing, secureTextEntry, shortInput, errorMessage} =
    props;

  getIcon = () => {
    let iconFound;
    if (icon === 'lock') {
      iconFound = <Feather name={icon} size={24} />;
    } else if (icon === 'email-outline') {
      iconFound = <MCIcon name={icon} size={24} />;
    } else if (icon === 'user') {
      iconFound = <Feather name={icon} size={24} />;
    } else {
      iconFound = <Feather name={icon} size={24} />;
    }

    return iconFound;
  };

  return (
    <View style={{flexDirection: "column"}}>
      <View style={[errorMessage ? styles.inputError : styles.container, shortInput ? styles.shortInput : '']}>
        {getIcon()}
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          keyboardType={type}
          value={value}
          secureTextEntry={secureTextEntry}
          onChange={e => onEndEditing(e.nativeEvent.text)}
        />
      </View>
      <Text style={errorMessage ? styles.error : styles.hide}>{errorMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.PRIMARY,
    borderStyle: 'solid',
  },
  shortInput: {
    width: 120,
  },
  input: {
    flexDirection: 'row',
    height: 40,
    width: "100%",
    fontSize: 15,
    marginVertical: 2,
  },
  error: {
    color: 'red',
    width: "100%",
    marginBottom: 10,
    paddingLeft: 10,
    textAlignVertical: "center"
  },
  inputError: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    paddingRight: 10,
    paddingLeft: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'red',
    borderStyle: 'solid',
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
    borderRadius: 15,
  },
});
