import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Select from '../../../components/Select/Select';
import {colors} from '../../../styles/Theme';
import {
  sexos,
  nacidos,
  provincias,
  gemelarOptions,
  AltasOptions,
  Hospitales
} from '../../../../helpers/data';
import {NEW_CASE} from '../../../../navigation/NavigationConstants';
import i18n from '../../../../assets/localization/i18n';
import CustomInput from '../../../components/customInput/CustomInput';
import DatePicker from 'react-native-date-picker';
export default function DataChildUi({
  handle,
  errors,
  disabled,
  navigationTo,
  values,
}) {
  const {
    saveName,
    saveLastname,
    saveBirthdate,
    saveNacido,
    saveDNI,
    saveProvincia,
    saveSex,
    saveGemelar,
    saveHistoriaClinica,
    savePeso,
    saveTalla,
    savePerimetro,
    saveEdad,
    saveAlta,
    saveAltaFecha,
    saveHospital
  } = handle;
  const {
    NameError,
    LastnameError,
    BirthdateError,
    DNIError,
    sexError,
    provinciaError,
    nacidoError,
    GemelarError,
    HistoriaClinicaError,
    PesoError,
    TallaError,
    PerimetroError,
    EdadError,
    AltaError,
    AltaFechaError,
    HospitalError
  } = errors;
  const {
    Name,
    Lastname,
    Birthdate,
    DNI,
    sex,
    nacido,
    provincia,
    Gemelar,
    HistoriaClinica,
    Peso,
    Talla,
    Perimetro,
    Edad,
    Alta,
    AltaFecha,
    Hospital
  } = values;
  const [showDate, setshowDate] = useState(false);
  const [showAltaFecha, setshowAltaFecha] = useState(false)
  return (
    <View style={styles.cont}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <ScrollView>
          <View style={styles.nav}>
            <Text style={styles.title}>Nuevo caso </Text>
            <Text style={styles.title2}>Datos de la madre </Text>
          </View>
          <View style={styles.form}>
            <Text style={styles.title3}>Nombre</Text>
            <CustomInput
              label={i18n.t('userName')}
              type="default"
              secureTextEntry={false}
              placeholder="Sandra"
              saveValue={saveName}
              value={Name}
              err={NameError}
            />
            <Text style={styles.title3}>Apellido</Text>
            <CustomInput
              label={i18n.t('userName')}
              type="default"
              secureTextEntry={false}
              placeholder="Sosa"
              saveValue={saveLastname}
              value={Lastname}
              err={LastnameError}
            />
            <Text style={styles.title3}>Fecha de nacimiento</Text>
            <TouchableOpacity
              style={[styles.btn, {backgroundColor: '#278AB0'}]}
              onPress={() => setshowDate(true)}>
              <Text style={styles.titleButton}>Elegir fecha</Text>
            </TouchableOpacity>
            <DatePicker
              modal
              open={showDate}
              date={Birthdate || new Date()}
              onConfirm={date => {
                saveBirthdate(date);
                setshowDate(false);
              }}
              onCancel={() => setshowDate(false)}
              mode="date"
            />
            <Select
              items={nacidos}
              selectedValue={nacido}
              onValueChange={saveNacido}
              title={'Nacido'}
              err={nacidoError}
            />
            <Text style={styles.title3}>DNI</Text>
            <CustomInput
              label={i18n.t('userName')}
              type="numeric"
              secureTextEntry={false}
              placeholder="xx.xxx.xxx"
              saveValue={saveDNI}
              value={DNI}
              err={DNIError}
            />
            <Select
              items={sexos}
              selectedValue={sex}
              onValueChange={saveSex}
              title={'Sexo'}
              err={sexError}
            />
            <Select
              items={gemelarOptions}
              selectedValue={Gemelar}
              onValueChange={saveGemelar}
              title={'Gemelar'}
              err={GemelarError}
            />
            <Select
              items={provincias}
              selectedValue={provincia}
              onValueChange={saveProvincia}
              title={'Provincia'}
              err={provinciaError}
            />
            <Text style={styles.title3}>Numero de historia clinica</Text>
            <CustomInput
              label={i18n.t('userName')}
              type="numeric"
              secureTextEntry={false}
              placeholder="xxxxxxxxxx"
              saveValue={saveHistoriaClinica}
              value={HistoriaClinica}
              err={HistoriaClinicaError}
            />
            <View style={styles.row}>
              <View>
                <Text style={styles.title3}>Peso (en gramos)</Text>
                <CustomInput
                  label={i18n.t('userName')}
                  type="numeric"
                  secureTextEntry={false}
                  placeholder="0.00"
                  saveValue={savePeso}
                  value={Peso}
                  err={PesoError}
                  shortInput
                />
              </View>
              <View>
                <Text style={styles.title3}>Talla (en centímetros)</Text>
                <CustomInput
                  label={i18n.t('userName')}
                  type="numeric"
                  secureTextEntry={false}
                  placeholder="0.00"
                  saveValue={saveTalla}
                  value={Talla}
                  err={TallaError}
                  shortInput
                />
              </View>
            </View>
            <View style={styles.row}>
              <View>
                <Text style={styles.title3}>Perímetro cefálico</Text>
                <CustomInput
                  label={i18n.t('userName')}
                  type="numeric"
                  secureTextEntry={false}
                  placeholder="0.00"
                  saveValue={savePerimetro}
                  value={Perimetro}
                  err={PerimetroError}
                  shortInput
                />
              </View>
              <View>
                <Text style={styles.title3}>Edad gestacional</Text>
                <CustomInput
                  label={i18n.t('userName')}
                  type="numeric"
                  secureTextEntry={false}
                  placeholder="0.00"
                  saveValue={saveEdad}
                  value={Edad}
                  err={EdadError}
                  shortInput
                />
              </View>
            </View>
            <Select
              items={AltasOptions}
              selectedValue={Alta}
              onValueChange={saveAlta}
              title={'Alta'}
              err={AltaError}
            />
            <Text style={styles.title3}>Fecha del alta</Text>
            <TouchableOpacity
              style={[styles.btn, {backgroundColor: '#278AB0'}]}
              onPress={() => setshowAltaFecha(true)}>
              <Text style={styles.titleButton}>Elegir fecha del alta</Text>
            </TouchableOpacity>
            <DatePicker
              modal
              open={showAltaFecha}
              date={AltaFecha || new Date()}
              onConfirm={date => {
                saveAltaFecha(date);
                setshowAltaFecha(false);
              }}
              onCancel={() => setshowAltaFecha(false)}
              mode="date"
            />
            <Select
              items={Hospitales}
              selectedValue={Hospital}
              onValueChange={saveHospital}
              title={'Hospital'}
              err={HospitalError}
            />
            <View style={styles.contBtn}>
              <TouchableOpacity
                style={[styles.btn, {backgroundColor: '#6EA4B9'}]}
                onPress={() => {
                  navigationTo(NEW_CASE.FORM_MOTHER);
                }}>
                <Text style={styles.titleButton}>Atras</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.btn, {backgroundColor: '#278AB0'}]}
                onPress={() => {
                  navigationTo(NEW_CASE.FORM_MALFORMATION);
                }}
                disabled={disabled}>
                <Text style={styles.titleButton}>Siguiente</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
  },
  nav: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleButton: {
    fontSize: 15,
    color: '#fff',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    marginRight: 240,
    marginTop: 25,
  },
  title2: {
    fontSize: 18,
    color: 'black',
    marginRight: 200,
  },
  title3: {
    fontSize: 15,
    color: 'black',
    marginBottom: -5,
    marginTop: 15,
  },
  form: {
    marginHorizontal: 35,
    marginTop: 30,
    justifyContent: 'space-between',
  },
  contBtn: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 25,
    flexDirection: 'row',
  },
  btn: {
    marginVertical: 5,
    borderRadius: 20,
    width: 140,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
