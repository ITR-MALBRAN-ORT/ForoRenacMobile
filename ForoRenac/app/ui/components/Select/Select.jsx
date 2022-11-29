import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Picker} from '@react-native-picker/picker';
import {validLength} from '../../../helpers/helpers';
import {colors} from '../../styles/Theme';

export default function Select({
  items,
  selectedValue,
  onValueChange,
  title,
  err,
}) {
  function renderItems() {
    return items.map(i => {
      return <Picker.Item label={i.value} value={i.id} key={i.id} />;
    });
  }

  function checkError() {
    return validLength(err);
  }
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <View style={[styles.select, {borderColor: err ? 'red' : colors.PRIMARY}]}>
        <Picker
          selectedValue={selectedValue}
          onValueChange={itemValue => onValueChange(itemValue)}>
          <Picker.Item label={`Seleccionar ${title}`} value={null} />
          {renderItems()}
        </Picker>
      </View>
      {err && <Text style={styles.error}>{err}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    color: 'black',
    marginTop: 15,
  },
  select: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
  },
  error: {
    color: 'red',
    fontSize: 15,
    marginLeft: 10,
  },
});
