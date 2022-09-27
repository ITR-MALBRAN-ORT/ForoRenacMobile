import React , { useEffect, useState } from 'react'
import DataEstudiosUi from './DataEstudiosUi'
import { useNavigation } from '@react-navigation/native'
export default function DataEstudiosScreens() {
    const [estado,setEstado]=useState({value:'',error:null})
    const [disabled, setDisabled] = useState(true) 
    const navigation = useNavigation()

    useEffect(()=>{
        handleDisabled()
    },[estado])

    function handleDisabled(){
        if(estado.value){
            setDisabled(false)
        }else{
            setDisabled(true)
        }
    }

    function saveEstado(estado){
        if(estado != null){
            setEstado({value:estado, error:null})
        }else{
            setEstado({value:'', error:'Required field'})
        }
    }
    function navigationTo(componentName){
        navigation.navigate(componentName)
    }
  return (
        <DataEstudiosUi
            navigationTo={navigationTo}
            disabled={disabled}
            handle={{saveEstado}}
            errors={{estadoError: estado.error}}
            values={{estado:estado.value}}
        />
  )
}