import {StyleSheet} from 'react-native';
import React from 'react';
import {DrawerItem} from '@react-navigation/drawer';

const DrawerCustomItem = ({isActive, label, onPress}) => {
  return (
    <DrawerItem
      labelStyle={styles.label}
      style={[styles.itemContainer, isActive && styles.activeLink]}
      label={label}
      onPress={onPress}
    />
  );
};

export default DrawerCustomItem;

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Montserrat',
    color: '#E8E8E8',
    marginStart: 10,
  },
  itemContainer: {
    borderRadius: 0,
    width: '100%',
    marginLeft: 0,
    marginVertical: 0,
  },
  activeLink: {
    backgroundColor: 'rgba(39, 138, 176, 0.59)',
  },
});
