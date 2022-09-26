import React, {useEffect, useState} from 'react';
import LoginScreenUI from './LoginScreenUI';
import { useNavigation } from '@react-navigation/native';

import {isValidateEmail, isValidPassword} from '../../../helpers/helpers'
export default function LoginScreen() {
  const [email, setEmail] = useState({value:'', error:null})
  const [password, setPassword] = useState({value:'', error:null})
  const [disabled, setDisabled]=useState(true)
  const navigation = useNavigation();
  useEffect(()=>{
    handleDisabled()
  },[email, password])

  function handleDisabled(){
    if(email.value && password.value){
      setDisabled(false)
    }else{
      setDisabled(true)
    }
  }
  
 
  function navigateTo(componentName){
      //See componentNames list in navigation/MainStack.jsx
      navigation.navigate(componentName)
  }
  function handleEmail(email){
    if(isValidateEmail(email)){
        setEmail({value: email, error:null})
    }else{
        setEmail({value:'', error: 'Email Invalid'})
    }
  }

  function handlePassword(password){
    if(isValidPassword(password)){
      setPassword({value: password, error:null})
    }else{
      setPassword({value:'', error:'Password Invalid'})
    }
  }

  function handleSubmit(){
    //TODO encrypt password and save credentials in db
    //NavigateTo --> landing
    navigateTo('Landing');

  }

  return (
    <LoginScreenUI
      handleEmail={handleEmail}
      handlePassword={handlePassword}
      errorEmail={email.error}
      errorPassword={password.error} 
      handleSubmit={handleSubmit}
      disabled={disabled}
      navigate = {navigateTo}
    />
  )
}