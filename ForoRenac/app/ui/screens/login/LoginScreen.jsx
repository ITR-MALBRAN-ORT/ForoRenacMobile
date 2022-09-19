import React, {useEffect, useState} from 'react';
import LoginScreenUI from './LoginScreenUI';
import {isValidateEmail, isValidPassword} from '../../../helpers/helpers'
export default function LoginScreen(props) {
  const [email, setEmail] = useState({value:'', error:null})
  const [password, setPassword] = useState({value:'', error:null})
  const [disabled, setDisabled]=useState(true)

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
  
  navigateTo = componentName => {
    //See componentNames list in navigation/MainStack.jsx
    props.navigation.replace(componentName);
  };

  function handleEmail(email){
    if(isValidateEmail(email)){
        setEmail({value: email, error:null})
    }else{
        setEmail({value:'', error: 'Email Invalid'})
    }
  }

  function handlePassword(password){
    if(isValidPassword(password)){
      setPassword({value:password, error:null})
    }else{
      setPassword({value:'', error:'Password Invalid'})
    }
  }

  function handleSubmit(){
    //TODO encrypt password and save credentials in db
    //NavigateTo --> landing
    this.navigateTo('Landing');
    console.log('dates corrects: ')
  }

  return (
    <LoginScreenUI
      handleEmail={handleEmail}
      handlePassword={handlePassword}
      handleSubmit={handleSubmit}
      disabled={disabled}
    />
  )
}