import React, { useEffect, useState } from 'react'
import DataMalformationUi from './DataMalformationUi'
import { useNavigation } from '@react-navigation/native'
import { validLength } from '../../../../helpers/helpers'
export default function DataMalformationScreen() {
    const [malformation, setMalformation] = useState({value:'',error:null})
    const [description, setDescription] = useState({value:'',error:null})
    const [Prenatal, setPrenatal] = useState({value:'',error:null})
    const [Anomalias, setAnomalias] = useState({value:'',error:null})
    const [Estudios, setEstudios] = useState([])
    const [Observaciones, setObservaciones] = useState({value:'',error:null})
    const [disabled, setDisabled] = useState(true) 
    const navigation = useNavigation()

    useEffect(()=>{
        handleDisabled()
    },[malformation,description, Prenatal, Anomalias, Observaciones])

    function handleDisabled(){
        if(malformation.value && description.value && Prenatal.value && Anomalias.value && Observaciones.value){
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
    function savePrenatal(prenatal){
        if(prenatal !== null){
            setPrenatal({value:prenatal, error:null})
        }else{
            setPrenatal({value:'',error:'Required field'})
        }
    }
    function saveAnomalias(anomalias){
        if(anomalias !== null){
            setAnomalias({value:anomalias, error:null})
        }else{
            setAnomalias({value:'',error:'Required field'})
        }
    }
    function saveObservaciones(observaciones){
        if(observaciones !== null){
            setObservaciones({value:observaciones, error:null})
        }else{
            setObservaciones({value:'',error:'Required field'})
        }
    }
    function saveEstudios(estudio){
        if(estudio !== null){
            setEstudios([...Estudios, estudio])
        }
    }
  return (
    <DataMalformationUi
    handle={{saveDescription, saveMalformation, savePrenatal, saveAnomalias, saveObservaciones, saveEstudios}}
    errors={{
        malformationError: malformation.error, 
        descriptionError: description.error,
        PrenatalError: Prenatal.error,
        AnomaliasError: Anomalias.error,
        ObservacionesError: Observaciones.error,
    }}
    disabled={disabled}
    navigationTo={navigationTo}
    values={{
        malformation:malformation.value,
        description:description.value,
        Prenatal:Prenatal.value,
        Anomalias:Anomalias.value,
        Observaciones:Observaciones.value,
        Estudios
    }}
    />
  )
}