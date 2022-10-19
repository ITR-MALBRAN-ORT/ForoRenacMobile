import React, {useState} from 'react';
import CustomInputUI from './CustomInputUI';

export default CustomInput = props => {
  const {icon, type, placeholder, required, saveValue, secureTextEntry, shortInput} = props;
  const [errorMessage, setErrorMessage] = useState('');

  onEndEditing = text => {
    if (required && !text.trim()) {
      setErrorMessage('Required');
      return;
    }
    if (type === 'email-address' && !isValidEmail(text)) {
      setErrorMessage('Invalid Email');
      return;
    }
    setErrorMessage('');
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
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      errorMessage={errorMessage}
      onEndEditing={this.onEndEditing}
      shortInput={shortInput}
    />
  );
};
