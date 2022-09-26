import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { isValidPassword, isValidRepeatPassword, validLength } from '../../../helpers/helpers'
import ResetPasswordUi from './ResetPasswordUi'
import {setRequiredNewPassword} from '../../../redux/slices/Auth'
export default function ResetPasswordScreen() {
    const [newPassword, setNewPassword] = useState({value:'AAaa124!!', error:null})
    const [repeatPassword, setRepeatPassword] = useState({value:'AAaa124!!', error:null})
    const [disabled, setDisabled] = useState(true)
    const dispatch = useDispatch()
    useEffect(()=>{
        handleDisabled()
    },[newPassword, repeatPassword])
    
    const handleDisabled = () =>{
        if(newPassword.value && repeatPassword.value){
            setDisabled(false)
        }else{
            setDisabled(true)
        }
    }

    const saveNewPassword = (newPassword) =>{
        if(isValidPassword(newPassword)){
            setNewPassword({value:newPassword, error:null})
          }else{
            setNewPassword({value:'', error:'Password Invalid'})
          }
    }
    const saveRepeatPassword = (repeatPassword) =>{
        if(isValidRepeatPassword(newPassword.value, repeatPassword)){
            if(validLength(newPassword.value)){
                setRepeatPassword({value:repeatPassword, error:null})
            }else{
                setRepeatPassword({value:'', error:'Required field'})
            }
          }else{
            setRepeatPassword({value:'', error:'passwords do not match'})
        }
    }

    const confirmNewPassword = () =>{
        
        dispatch(setRequiredNewPassword(false))
        
    }
  return <ResetPasswordUi
            confirmNewPassword = {confirmNewPassword}
            saveNewPassword = {saveNewPassword}
            saveRepeatPassword = {saveRepeatPassword}
            errors = {{newPasswordError: newPassword.error, repeatPasswordError: repeatPassword.error}}
            disabled = {disabled}
        />
}