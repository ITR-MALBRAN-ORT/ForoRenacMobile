import { useNavigation } from '@react-navigation/native'
import React, { useState, useEffect } from 'react'
import { isValidateEmail, validLength } from '../../../helpers/helpers'
import PasswordRecoveryUi from './PasswordRecoveryUi'
import { LOGIN_STACK } from '../../../navigation/NavigationConstants'
export default function PasswordRecoveryScreen() {
  const [email,setEmail]=useState('')
  const [disable, setDisable]=useState(true)
  const [error, setError] = useState(null)
  useEffect(()=>{
    handleDisabled()
  },[email])
  const navigation = useNavigation()
  function navigationTo(components){
      navigation.navigate(components)
  }
  function handleDisabled(){
    if(email){
      setDisable(false)
    }else{
      setDisable(true)
    }
  }

  handleEmail = (email) =>{
    if(validLength(email)){
      if(isValidateEmail(email)){
        setEmail(email)
        setError(null)
      }else{
        setError('Email Invalid')
      }
    }else{
      setError('Required field')
    }
  }

  sendRecoveryEmail = () =>{
      navigation.navigate(LOGIN_STACK.CODE_VERIFICATION_SCREEN, {code:1234})   
  }

  return  <PasswordRecoveryUi  
            sendRecoveryEmail={sendRecoveryEmail}
            handleEmail={handleEmail}
            disable={disable}
            error={error}
            navigationTo={navigationTo}
            >
          </PasswordRecoveryUi >
}