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
  const [disabled, setDisabled] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    handleDisabled();
  }, [Name, Lastname,Birthdate, sex, provincia, nacido]);

  const handleDisabled = () => {
    if ( Name.value && Lastname.value && Birthdate.value && sex.value && provincia.value && nacido.value) {
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
        setDNI({value: fullName, error: null});
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
  function navigationTo(componentName) {
    navigation.navigate(componentName);
  }
  return (
    <DataChildUi
      handle={{saveName,saveLastname, saveBirthdate,saveDNI, saveNacido, saveProvincia, saveSex}}
      errors={{
        NameError: Name.error,
        LastnameError: Lastname.error,
        BirthdateError: Birthdate.error,
        DNIError: DNI.error,
        sexError: sex.error,
        provinciaError: provincia.error,
        nacidoError: nacido.error,
      }}
      disabled={disabled}
      navigationTo={navigationTo}
      values={{
        Name: Name.value,
        Lastname: Lastname.value,
        Birthdate: Birthdate.value,
        DNI: DNI.value,
        sex: sex.value,
        nacido: nacido.value,
        provincia: provincia.value,
      }}
    />
  );
}
