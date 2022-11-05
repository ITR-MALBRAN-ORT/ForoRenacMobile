import React from 'react';
import {
  View,
  Text,
  Modal,
  Pressable,
  StyleSheet,
  Alert,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import CustomTableRow from '../../components/CustomTableRow/CustomTableRow';
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/customButton';
import {DATA} from './data.js';
import Feather from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {getCases} from '../../../redux/slices/Cases';
import {colors} from '../../styles/Theme';
import FiltersComponent from '../../components/Filters/Filters';
import CustomRadio from '../../components/CustomRadio/CustomRadio';
import DatePicker from 'react-native-date-picker';
import { color } from 'react-native-reanimated';

const LandingScreen = ({navigation}) => {
  const [Search, setSearch] = useState(undefined);
  const {cases} = useSelector(state => state.cases);
  const {first_name} = useSelector(state => state.auth);
  const [Filter, setFilter] = useState('Casos');
  const [Filters, setFilters] = useState({
    Estado: 'All',
    Periodo: {
      min: undefined,
      max: undefined,
    },
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [ShowFechas, setShowFechas] = useState({
    min: false,
    max: false,
  });
  const STATES = {
    0: 'drafted',
    1: 'sent',
    2: 'review',
    3: 'historial',
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCases());
  }, []);
  const filterFunction = (e, i) => {
    const date = new Date(e.fecha);
    if (
      (Filter === 'Casos' &&
        STATES[e.estado] !== 'drafted' &&
        STATES[e.estado] !== 'sent') ||
      (Filter === 'Casos por revisar' && STATES[e.estado] !== 'review') ||
      (Filter === 'Historial de casos' && STATES[e.estado] !== 'historial')
    )
      return false;
    if (
      (Filters.Estado !== 'All' && Filters.Estado !== STATES[e.estado]) ||
      (typeof Filters.Periodo.min !== 'undefined' &&
        Filters.Periodo.min.getTime() >= date.getTime()) ||
      (typeof Filters.Periodo.max !== 'undefined' &&
        Filters.Periodo.max.getTime() <= date.getTime())
    )
      return false;
    return true;
  };
  const Item = ({item}) => (
    <CustomTableRow item={item} navigation={navigation} />
  );
  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <Text style={styles.Greeting}>Hola, {first_name || 'Nombre'}!</Text>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.IconContainer}>
            <Feather
              size={24}
              name="filter"
              onPress={() => setModalVisible(true)}
            />
          </View>
          <View style={styles.IconContainer}>
            <Feather size={24} name="calendar" />
          </View>
        </View>
      </View>
      <View style={styles.filterContainer}>
        <CustomInput
          icon={'search'}
          placeholder="Search"
          required
          type="email-address"
          value={Search}
          saveValue={setSearch}
        />
      </View>
      <View style={{width: '100%', paddingLeft: 20, paddingRight: 20}}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('FORM')}>
          <Feather size={24} name="plus-circle" color={colors.WHITE} />
          <Text style={styles.ButtonText}>Agregar Caso</Text>
        </TouchableOpacity>
      </View>
      <FiltersComponent
        options={['Casos', 'Casos por revisar', 'Historial de casos']}
        selected={Filter}
        setter={setFilter}
      />
      {Filter === 'Casos' ? (
        <>
          <Text style={styles.casesTitle}>Drafted</Text>
          <FlatList
            data={cases.filter(e => STATES[e.estado] === 'drafted')}
            renderItem={Item}
            navigation={navigation}
            keyExtractor={item => item.id}
            style={{
              width: '100%',
              flex: 1,
              paddingLeft: '5%',
              paddingRight: '5%',
            }}
          />
          <Text style={styles.casesTitle}>Sent</Text>
          <FlatList
            data={cases.filter(e => STATES[e.estado] === 'sent')}
            renderItem={Item}
            navigation={navigation}
            keyExtractor={item => item.id}
            style={{
              width: '100%',
              flex: 1,
              paddingLeft: '5%',
              paddingRight: '5%',
            }}
          />
        </>
      ) : (
        <FlatList
          data={cases.filter(filterFunction)}
          renderItem={Item}
          navigation={navigation}
          keyExtractor={item => item.id}
          style={{
            width: '100%',
            flex: 1,
            paddingLeft: '5%',
            paddingRight: '5%',
          }}
        />
      )}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Filters</Text>
            <Text style={styles.subtitle}>Date</Text>
            <View style={{alignSelf: 'flex-start', marginTop: 10}}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'space-around',
                }}>
                <View>
                  <Button
                    title="Min"
                    onPress={() => setShowFechas({...ShowFechas, min: true})}
                  />
                  <Text>
                    {Filters.Periodo.min
                      ? Filters.Periodo.min.getFullYear() +
                        '/' +
                        (Filters.Periodo.min.getMonth() + 1) +
                        '/' +
                        Filters.Periodo.min.getDate()
                      : 'None'}
                  </Text>
                </View>
                <View>
                  <Button
                    title="Max"
                    onPress={() => setShowFechas({...ShowFechas, max: true})}
                  />
                  <Text>
                    {Filters.Periodo.max
                      ? Filters.Periodo.max.getFullYear() +
                        '/' +
                        (Filters.Periodo.max.getMonth() + 1) +
                        '/' +
                        Filters.Periodo.max.getDate()
                      : 'None'}
                  </Text>
                </View>
              </View>
              <DatePicker
                modal
                open={ShowFechas.min}
                date={Filters.Periodo.min || new Date()}
                onConfirm={date => {
                  setShowFechas({...ShowFechas, min: false});
                  setFilters({
                    ...Filters,
                    Periodo: {...Filters.Periodo, min: date},
                  });
                }}
                onCancel={() => {
                  setShowFechas({...ShowFechas, min: false});
                }}
                mode="date"
              />
              <DatePicker
                modal
                open={ShowFechas.max}
                date={Filters.Periodo.max || new Date()}
                onConfirm={date => {
                  setShowFechas({...ShowFechas, max: false});
                  setFilters({
                    ...Filters,
                    Periodo: {...Filters.Periodo, max: date},
                  });
                }}
                mode="date"
                onCancel={() => {
                  setShowFechas({...ShowFechas, max: false});
                }}
              />
            </View>
            <CustomButton
              text="Hide Filters"
              onPress={() => setModalVisible(!modalVisible)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  filterContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
  },
  IconContainer: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: colors.PRIMARY,
    padding: 5,
  },
  Greeting: {
    fontSize: 18,
    color: '#1E1E1E',
    fontWeight: '600',
  },
  addButton: {
    backgroundColor: colors.SUCCESS,
    width: '100%',
    flexDirection: 'row',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  ButtonText: {
    color: colors.WHITE,
    marginLeft: 5,
    marginRight: 5,
    fontSize: 14,
    fontWeight: '600',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    padding: 25,
  },
  modalView: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: colors.WHITE,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 3,
    borderColor: colors.PRIMARY,
  },
  modalText: {
    marginBottom: 15,
    fontSize: 32,
    textAlign: 'center',
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 24,
    textAlign: 'center',
  },
  casesTitle:{
    alignSelf: "flex-start", 
    fontSize: 18,
    marginLeft: 20, 
    color: colors.PRIMARY,
    fontWeight: "600",
    marginBottom: 5
  }
});

export default LandingScreen;
/*<Text style={styles.subtitle}>Estado</Text>
              <CustomRadio
                Label="All"
                Selected={'All' === Filters.Estado}
                cb={() => setFilters({...Filters, Estado: 'All'})}
              />
              <CustomRadio
                Label="drafted"
                Selected={'drafted' === Filters.Estado}
                cb={() => setFilters({...Filters, Estado: 'drafted'})}
              />
              <CustomRadio
                Label="sent"
                Selected={'sent' === Filters.Estado}
                cb={() => setFilters({...Filters, Estado: 'sent'})}
              />
              <CustomRadio
                Label="review"
                Selected={'review' === Filters.Estado}
                cb={() => setFilters({...Filters, Estado: 'review'})}
              />
              <CustomRadio
                Label="historial"
                Selected={'historial' === Filters.Estado}
                cb={() => setFilters({...Filters, Estado: 'historial'})}
              /> */
