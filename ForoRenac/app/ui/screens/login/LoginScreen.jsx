import React, {useEffect, useState} from 'react';
import LoginScreenUI from './LoginScreenUI';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import {isValidateEmail, isValidPassword} from '../../../helpers/helpers'
import { loginUser } from '../../../redux/slices/Auth';
export default function LoginScreen() {
  const [email, setEmail] = useState({value:'', error:null})
  const [password, setPassword] = useState({value:'', error:null})
  const [disabled, setDisabled]=useState(true)
  const navigation = useNavigation();
  const dispatch = useDispatch()
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
    dispatch(loginUser({email:email, password:password}))
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