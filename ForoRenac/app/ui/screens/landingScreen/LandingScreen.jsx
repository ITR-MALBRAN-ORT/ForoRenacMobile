import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
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
import Filters from '../../components/Filters/Filters';

const LandingScreen = ({navigation}) => {
  const [Search, setSearch] = useState(undefined);
  const {cases} = useSelector(state => state.cases);
  const {first_name} = useSelector(state => state.auth);
  const [Filter, setFilter] = useState('Casos');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCases());
  }, []);
  const Item = ({item}) => {
    return <CustomTableRow item={item} navigation={navigation} />;
  };
  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <Text style={styles.Greeting}>Hola, {first_name || 'Nombre'}!</Text>
        <View style={{flexDirection:"row"}}>
          <View style={styles.IconContainer}>
            <Feather size={24} name="filter" />
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
      <Filters
        options={['Casos', 'Casos por revisar', 'Historial de casos']}
        selected={Filter}
        setter={setFilter}
      />
      <FlatList
        data={cases}
        renderItem={Item}
        navigation={navigation}
        keyExtractor={item => item.id}
        style={{width: "90%",height: "100%", flex: 1}}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 100,
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
    backgroundColor: '#1DC690',
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
});

export default LandingScreen;
