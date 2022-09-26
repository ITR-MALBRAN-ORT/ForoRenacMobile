import React, { useEffect, useState } from 'react'
import DataMalformationUi from './DataMalformationUi'
import { useNavigation } from '@react-navigation/native'
import { validLength } from '../../../../helpers/helpers'
export default function DataMalformationScreen() {
    const [malformation, setMalformation] = useState({value:'',error:null})
    const [description, setDescription] = useState({value:'',error:null})
    const [disabled, setDisabled] = useState(true) 
    const navigation = useNavigation()

    useEffect(()=>{
        handleDisabled()
    },[malformation,description])

    function handleDisabled(){
        if(malformation.value && description.value){
            setDisabled(false)
        }else{
            setDisabled(true)
        }
    }
    function navigationTo(componentName){
        navigation.navigate(componentName)
    }

    function saveMalformation(malformation){
        if(malformation != null){
            setMalformation({value:malformation, error:null})
        }else{
            setMalformation({value:'',error:'Required field'})
        }
    }

    function saveDescription(description){
        if(validLength(description)){
            setDescription({value:description, error:null})
        }else{
            setDescription({value:'',error:'Required field'})
        }
    }
  return (
    <DataMalformationUi
    handle={{saveDescription, saveMalformation}}
    errors={{malformationError: malformation.error, descriptionError: description.error}}
    disabled={disabled}
    navigationTo={navigationTo}
    values={{malformation:malformation.value}}
    />
  )
}