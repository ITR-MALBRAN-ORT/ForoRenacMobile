import React, { useEffect, useState } from 'react'
import { isValidPassword, isValidRepeatPassword, validLength } from '../../../helpers/helpers'
import ResetPasswordUi from './ResetPasswordUi'

export default function ResetPasswordScreen() {
    const [newPassword, setNewPassword] = useState({value:'', error:null})
    const [repeatPassword, setRepeatPassword] = useState({value:'', error:null})
    const [disabled, setDisabled] = useState(true)

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
        console.log('contraseña actualizada')
    }
  return <ResetPasswordUi
            confirmNewPassword = {confirmNewPassword}
            saveNewPassword = {saveNewPassword}
            saveRepeatPassword = {saveRepeatPassword}
            errors = {{newPasswordError: newPassword.error, repeatPasswordError: repeatPassword.error}}
            disabled = {disabled}
        />
}