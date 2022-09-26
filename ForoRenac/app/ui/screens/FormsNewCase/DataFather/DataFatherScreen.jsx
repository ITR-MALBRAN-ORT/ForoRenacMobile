import React,{useEffect, useState} from 'react'
import { validLength, isValidPhone, isValidateEmail } from '../../../../helpers/helpers'
import { useNavigation } from '@react-navigation/native'
import DataFatherUi from './DataFatherUi'

export default function DataFatherScreen() {
    const [fullName, setFullName] = useState({value:'',error:null})
    const [telephone, setTelephone] = useState({value:'',error:null})
    const [email, setEmail] = useState({value:'',error:null})
    const [disabled, setDisabled] = useState(true)
    const navigation = useNavigation()
    useEffect(()=>{
        handleDisabled()
    },[fullName, telephone, email])

    const handleDisabled = () =>{
        if(fullName.value && telephone.value && email.value){
            setDisabled(false)
        }else{
            setDisabled(true)
        }
    }
    const saveFullName = (fullName) =>{
        if(validLength(fullName)){
            setFullName({value:fullName, error:null})
        }else{
            setFullName({value:'', error:'Required field'})
        }
    }

    const saveTelephone = (telephone) =>{
        if(isValidPhone(telephone)){
            setTelephone({value:telephone, error:null})
        }else{
            setTelephone({value:'', error:'Invalid phone number'})
        }
    }

    const saveEmail = (email) =>{
        if(isValidateEmail(email)){
            setEmail({value: email, error:null})
        }else{
            setEmail({value:'', error: 'Email Invalid'})
        }
    }

    function navigationTo(componentName){
        navigation.navigate(componentName)
    }  
    return <DataFatherUi
                handle = {{saveFullName, saveTelephone, saveEmail}}
                errors = {{fullNameError: fullName.error, telephoneError: telephone.error, emailError: email.error}}
                disabled = {disabled}
                navigationTo = {navigationTo}
            />
}