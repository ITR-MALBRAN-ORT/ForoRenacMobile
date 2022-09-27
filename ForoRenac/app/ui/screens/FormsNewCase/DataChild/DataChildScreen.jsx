import React, { useState,useEffect } from 'react'
import DataChildUi from './DataChildUi'
import { useNavigation } from '@react-navigation/native'

export default function DataChildScreen() {
    const [sex,setSex] = useState({value:'',error:null})
    const [nacido, setNacido] = useState({value:'',error:null})
    const [provincia, setProvincia] = useState({value:'',error:null})
    const [disabled, setDisabled] = useState(true) 
    const navigation = useNavigation()
  
  useEffect(()=>{
      handleDisabled()
  },[sex, provincia, nacido])
  
  const handleDisabled = () =>{
      if(sex.value && provincia.value && nacido.value){
          setDisabled(false)
      }else{
          setDisabled(true)
      }
  }
    const saveSex =(sex)=>{
          if(sex != null){
              setSex({value:sex, error:null})
          }else{
              setSex({value:'',error:'Required field'})
          }
    }
  
    const saveNacido = (nacido) =>{
          if(nacido != null){
              setNacido({value:nacido, error:null})
          }else{
              setNacido({value:'', error:'Required field'})
          }
    }
  
    const saveProvincia =(provincia) =>{
          if(provincia != null){
              setProvincia({value:provincia, error:null})
          }else{
              setProvincia({value:'', error:'Required field'})
          }
    }
    function navigationTo(componentName){
      navigation.navigate(componentName)
    }
  return <DataChildUi
            handle={{saveNacido,saveProvincia,saveSex}}
            errors={{sexError: sex.error, provinciaError:provincia.error, nacidoError:nacido.error}}
            disabled={disabled}
            navigationTo={navigationTo}
            values={{sex:sex.value, nacido: nacido.value, provincia:provincia.value}}
        />
}