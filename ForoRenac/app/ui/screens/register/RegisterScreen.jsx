import React, {useEffect, useState} from 'react'
import {isValidateEmail, isValidPassword, isValidRepeatPassword, validLength} from '../../../helpers/helpers'
import RegisterScreenUI from './RegisterScreenUI';
import { useNavigation } from '@react-navigation/native';

export default function RegisterScreen() {
  const [email, setEmail] = useState({value:'', error:null})
  const [password, setPassword] = useState({value:'', error:null})
  const [repeatPassword, setRepeatPassword] = useState({value:'', error:null})
  const [fullName, setFullName] = useState({value:'', error:null})
  const [address,setAddress]=useState({value:'', error:null})
  const [floor, setFloor]=useState({value:'', error:null})
  const [department, setDepartment]= useState({value:'', error:null})
  const [disabled, setDisabled]=useState(true)

  useEffect(()=>{
    handleDisabled()
  },[email, password, repeatPassword, fullName, address, department, floor])

  function navigateTo(componentName){
    //See componentNames list in navigation/MainStack.jsx
    console.log(componentName)
  }

  function handleDisabled(){
    if(email.value && password.value && repeatPassword.value && fullName.value && address.value && floor.value && department.value){
      setDisabled(false)
    }else{
      setDisabled(true)
    }
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
      setPassword({value:password, error:null})
    }else{
      setPassword({value:'', error:'Password Invalid'})
    }
  }

  function handleRepeatPassword(repeatPassword){
    if(isValidRepeatPassword(password.value, repeatPassword)){
      if(validLength(password.value)){
          setRepeatPassword({value:repeatPassword, error:null})
      }else{
          setRepeatPassword({value:'', error:'Required field'})
      }
    }else{
      setRepeatPassword({value:'', error:'passwords do not match'})
    }
  }

  function handleFullName(fullName){
    if(validLength(fullName)){
      setFullName({value:fullName, error:null})
    }else{
      setFullName({value:'', error:'Required field'})
    }
  }

  function handleAddress(address){
    if(validLength(address)){
      setAddress({value:address, error:null})
    }else{
      setAddress({value:'', error:'Required field'})
    }
  }

  function handleFloor(floor){
    if(validLength(floor)){
      setFloor({value:floor, error:null})
    }else{
      setFloor({value:'', error:'Required field'})
    }
  }

  function handleDepartment(department){
    
    if(validLength(department)){
      setDepartment({value:department,error:null})
    }else{
      setDepartment({value:'', error:'Required field'})
    }
  }
  handleSubmit = () => {
    console.log('dates corrects: ')
    console.log(fullName)
    console.log(email)
    console.log(password)
    console.log(repeatPassword)
    console.log(address)
  };

  return (
    <RegisterScreenUI

      handle={{handleEmail, handlePassword, handleRepeatPassword,handleFullName,handleAddress, handleFloor,handleDepartment}}
      errors={{emailError: email.error,
               passwordError:password.error,
               repeatPasswordError: repeatPassword.error,
               fullNameError: fullName.error,
               addressError: address.error,
               floorError: floor.error,
               departmentError: department.error}}
      handleSubmit={handleSubmit} 
      disabled={disabled}
      navigate={navigateTo}
    />
  )
}