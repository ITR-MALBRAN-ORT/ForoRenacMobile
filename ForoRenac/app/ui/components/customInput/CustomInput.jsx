import React, {useState} from 'react';
import CustomInputUI from './CustomInputUI';

export default CustomInput = props => {
  const {
    icon,
    type,
    placeholder,
    required,
    value,
    saveValue,
    secureTextEntry,
    shortInput,
  } = props;
  const [errorMessage, setErrorMessage] = useState('');

  onEndEditing = text => {
    if (required && text.trim() === '') {
      saveValue(text);
      setErrorMessage('Required');
      return;
    }
    if (type === 'email-address' && !isValidEmail(text)) {
      saveValue(text);
      setErrorMessage('Invalid Email');
      return;
    }
    setErrorMessage(false);
    saveValue(text);
  };

  isValidEmail = text => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    return reg.test(text) === true;
  };

  return (
    <CustomInputUI
      icon={icon}
      type={type}
      value={value}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      errorMessage={errorMessage}
      onEndEditing={this.onEndEditing}
      shortInput={shortInput}
    />
  );
};
