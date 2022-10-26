import {View, Text, StyleSheet, Pressable} from 'react-native';
import i18n from '../../../assets/localization/i18n';
import {LANDING_STACK} from '../../../navigation/NavigationConstants';
import {colors} from '../../styles/Theme';

const STATES = {
  0: 'drafted',
  1: 'sent',
  2: 'review',
  3: 'historial',
};

const CustomTableRow = ({item, navigation}) => {
  return (
    <Pressable
      style={[styles.container, styles[STATES[item.estado]]]}
      onPress={() =>
        navigation.navigate(LANDING_STACK.DETAIL_SCREEN, {id: item.id})
      }>
      <View style={styles.header}>
        <Text style={styles.title}>
          #{item.id} |{' '}
          <Text style={styles[STATES[item.estado]]}>
            {i18n.t(STATES[item.estado])}
          </Text>
        </Text>
        <Text>{item.fecha}</Text>
      </View>
      <Text style={styles.title}>DNI Madre: {item.Dni}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    borderWidth: 1,
    borderLeftWidth: 5,
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: "#272727"
  },
  drafted: {
    color: '#8BA0B5',
    borderColor: '#8BA0B5'
  },
  sent: {
    color: colors.SECONDARY,
    borderColor: colors.SECONDARY
  },
  review: {
    color: '#FC7A51',
    borderColor:'#FC7A51'
  },
  historial: {
    color: colors.SUCCESS,
    borderColor:colors.SUCCESS
  },
});

export default CustomTableRow;
