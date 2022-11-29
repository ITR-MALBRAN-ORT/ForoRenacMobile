import React, {useState, useEffect} from 'react';
import DataChildUi from './DataChildUi';
import {useNavigation} from '@react-navigation/native';
import {validLength} from '../../../../helpers/helpers';

export default function DataChildScreen() {
  const [Name, setName] = useState({value: '', error: null});
  const [Lastname, setLastname] = useState({value: '', error: null});
  const [Birthdate, setBirthdate] = useState({value: '', error: null});
  const [DNI, setDNI] = useState({value: '', error: null})
  const [sex, setSex] = useState({value: '', error: null});
  const [nacido, setNacido] = useState({value: '', error: null});
  const [provincia, setProvincia] = useState({value: '', error: null});
  const [Gemelar, setGemelar] = useState({value: '', error: null})
  const [HistoriaClinica, setHistoriaClinica] = useState({value: '', error: null})
  const [Peso, setPeso] = useState({value: '', error: null})
  const [Talla, setTalla] = useState({value: '', error: null})
  const [Perimetro, setPerimetro] = useState({value: '', error: null})
  const [Edad, setEdad] = useState({value: '', error: null})
  const [Alta, setAlta] = useState({value: '', error: null})
  const [AltaFecha, setAltaFecha] = useState({value: '', error: null})
  const [Hospital, setHospital] = useState({value: '', error: null})
  const [disabled, setDisabled] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    handleDisabled();
  }, [Name, Lastname,Birthdate, sex, Gemelar,HistoriaClinica, Peso, Talla, Perimetro, Edad,Alta, AltaFecha, Hospital, provincia, nacido]);

  const handleDisabled = () => {
    if ( Name.value && Lastname.value && Birthdate.value && sex.value && Gemelar.value && HistoriaClinica.value && Peso.value && Talla.value && Perimetro.value && Edad.value && Alta.value && AltaFecha.value && Hospital.value && provincia.value && nacido.value) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  const saveName = fullName => {
    if (validLength(fullName)) {
      setName({value: fullName, error: null});
    } else {
      setName({value: '', error: 'Required field'});
    }
  };
  const saveLastname = fullName => {
    if (validLength(fullName)) {
      setLastname({value: fullName, error: null});
    } else {
      setLastname({value: '', error: 'Required field'});
    }
  };
  const saveBirthdate = date => {
    if (date !== null) {
        setBirthdate({value: date, error: null});
    } else {
        setBirthdate({value: '', error: 'Required field'});
    }
  };
  const saveDNI = dni => {
    if (dni > 0 && dni <= 99999999 ) {
        setDNI({value: dni, error: null});
    } else {
        setDNI({value: '', error: 'Required field'});
    }
  };
  const saveSex = sex => {
    if (sex != null) {
      setSex({value: sex, error: null});
    } else {
      setSex({value: '', error: 'Required field'});
    }
  };
  const saveGemelar = gemelar => {
    if (gemelar != null) {
      setGemelar({value: gemelar, error: null});
    } else {
      setGemelar({value: '', error: 'Required field'});
    }
  };
  const saveNacido = nacido => {
    if (nacido != null) {
      setNacido({value: nacido, error: null});
    } else {
      setNacido({value: '', error: 'Required field'});
    }
  };
  const saveProvincia = provincia => {
    if (provincia != null) {
      setProvincia({value: provincia, error: null});
    } else {
      setProvincia({value: '', error: 'Required field'});
    }
  };
  const saveHistoriaClinica= historiaClinica => {
    if (validLength(historiaClinica)) {
      setHistoriaClinica({value: historiaClinica, error: null});
    } else {
      setHistoriaClinica({value: '', error: 'Required field'});
    }
  };
  const savePeso = peso => {
    if (validLength(peso)) {
      setPeso({value: peso, error: null});
    } else {
      setPeso({value: '', error: 'Required field'});
    }
  };
  const saveTalla = talla => {
    if (validLength(talla)) {
      setTalla({value: talla, error: null});
    } else {
      setTalla({value: '', error: 'Required field'});
    }
  };
  const savePerimetro = perimetro => {
    if (validLength(perimetro)) {
      setPerimetro({value: perimetro, error: null});
    } else {
      setPerimetro({value: '', error: 'Required field'});
    }
  };
  const saveEdad = edad => {
    if (validLength(edad)) {
      setEdad({value: edad, error: null});
    } else {
      setEdad({value: '', error: 'Required field'});
    }
  };
  const saveAlta = alta => {
    if (alta != null) {
      setAlta({value: alta, error: null});
    } else {
      setAlta({value: '', error: 'Required field'});
    }
  };
  const saveAltaFecha = date => {
    if (date !== null) {
        setAltaFecha({value: date, error: null});
    } else {
      setAltaFecha({value: '', error: 'Required field'});
    }
  };
  const saveHospital = hospital => {
    if (hospital != null) {
      setHospital({value: hospital, error: null});
    } else {
      setHospital({value: '', error: 'Required field'});
    }
  };
  function navigationTo(componentName) {
    navigation.navigate(componentName);
  }
  return (
    <DataChildUi
      handle={{saveName,saveLastname, saveBirthdate,saveDNI, saveNacido, saveGemelar, saveHistoriaClinica , savePeso, saveTalla, saveAlta, savePerimetro, saveEdad, saveAltaFecha, saveHospital, saveProvincia, saveSex}}
      errors={{
        NameError: Name.error,
        LastnameError: Lastname.error,
        BirthdateError: Birthdate.error,
        DNIError: DNI.error,
        sexError: sex.error,
        GemelarError: Gemelar.error,
        provinciaError: provincia.error,
        nacidoError: nacido.error,
        HistoriaClinicaError: HistoriaClinica.error,
        PesoError: Peso.error,
        TallaError: Talla.error,
        PerimetroError: Perimetro.error,
        EdadError: Edad.error,
        AltaError: Alta.error,
        AltaFechaError: AltaFecha.error,
        HospitalError: Hospital.error
      }}
      disabled={disabled}
      navigationTo={navigationTo}
      values={{
        Name: Name.value,
        Lastname: Lastname.value,
        Birthdate: Birthdate.value,
        DNI: DNI.value,
        sex: sex.value,
        Gemelar: Gemelar.value,
        nacido: nacido.value,
        provincia: provincia.value,
        HistoriaClinica: HistoriaClinica.value,
        Peso: Peso.value,
        Talla: Talla.value,
        Perimetro: Perimetro.value,
        Edad: Edad.value,
        Alta: Alta.value,
        AltaFecha: AltaFecha.value,
        Hospital: Hospital.value
      }}
    />
  );
}
