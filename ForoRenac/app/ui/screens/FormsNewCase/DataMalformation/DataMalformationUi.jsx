import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import React from 'react';
import {malformations, PrenatalOptions} from '../../../../helpers/data';
import Select from '../../../components/Select/Select';
import {NEW_CASE} from '../../../../navigation/NavigationConstants';
import {colors} from '../../../styles/Theme';
export default function DataMalformationUi({
  handle,
  errors,
  disabled,
  navigationTo,
  values,
}) {
  const {
    saveDescription,
    saveMalformation,
    savePrenatal,
    saveAnomalias,
    saveObservaciones,
    saveEstudios,
  } = handle;
  const {
    malformationError,
    descriptionError,
    PrenatalError,
    AnomaliasError,
    ObservacionesError,
  } = errors;
  const {
    malformation,
    description,
    Prenatal,
    Anomalias,
    Observaciones,
    Estudios,
  } = values;
  return (
    <View style={styles.cont}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <ScrollView>
          <View style={styles.nav}>
            <Text style={styles.title}>Nuevo caso </Text>
            <Text style={styles.title2}>Datos de malformacion </Text>
          </View>
          <View style={styles.form}>
            <Select
              items={malformations}
              selectedValue={malformation}
              onValueChange={saveMalformation}
              title={'Tipo de malformacion'}
              err={malformationError}
            />
            <Text style={styles.title3}>Descripcion</Text>
            {descriptionError && <Text style={styles.err}>{descriptionError}</Text>}
            <TextInput
              multiline
              style={styles.multiline}
              numberOfLines={4}
              value={description}
              onChange={e => saveDescription(e.nativeEvent.text)}
            />
            <Select
              items={PrenatalOptions}
              selectedValue={Prenatal}
              onValueChange={savePrenatal}
              title={'Prenatal'}
              err={PrenatalError}
            />
            <Text style={styles.title3}>
              Anomalías detectadas en prenatal (si corresponde)
            </Text>
            {AnomaliasError && <Text style={styles.err}>{AnomaliasError}</Text>}
            <TextInput
              multiline
              style={styles.multiline}
              numberOfLines={4}
              value={Anomalias}
              onChange={e => saveAnomalias(e.nativeEvent.text)}
            />
            <Text style={styles.title3}>Observaciones</Text>
            {ObservacionesError && <Text style={styles.err}>{ObservacionesError}</Text>}
            <TextInput
              multiline
              style={styles.multiline}
              numberOfLines={4}
              value={Observaciones}
              onChange={e => saveObservaciones(e.nativeEvent.text)}
            />
            <Text style={styles.link}>Agregar otra malformacion</Text>
            <View style={styles.contBtn}>
              <TouchableOpacity
                style={[styles.btn, {backgroundColor: '#6EA4B9'}]}
                onPress={null}>
                <Text style={styles.titleButton}>Anterior</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.btn, {backgroundColor: '#278AB0'}]}
                onPress={null}>
                <Text style={styles.titleButton}>Guardar como borrador</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.btn,
                  {backgroundColor: disabled ? '#5B6C73' : '#1DC690'},
                ]}
                onPress={null}>
                <Text style={styles.titleButton}>Finalizar</Text>
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
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 25,
  },
  btn: {
    marginVertical: 5,
    borderRadius: 20,
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  multiline: {
    borderColor: colors.PRIMARY,
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 5,
  },
  link: {
    fontSize: 14,
    color: colors.SECONDARY,
    fontWeight: '600',
    marginTop: 10,
  },
  err:{
    fontSize: 12,
    color: colors.ALERT,
    fontWeight: '600',
  }
});
