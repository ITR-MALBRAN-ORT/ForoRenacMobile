import {StyleSheet} from 'react-native';
import React from 'react';
import {DrawerItem} from '@react-navigation/drawer';
import { colors } from '../ui/styles/Theme';

const DrawerCustomItem = ({isActive, label, onPress}) => {
  return (
    <DrawerItem
      labelStyle={[styles.label, isActive && styles.activeLabel]}
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
    color: colors.PRIMARY,
    marginStart: 10,
    fontWeight:'bold',
    lineHeight: 17,
    fontSize:14
  },
  itemContainer: {
    borderRadius: 0,
    width: '100%',
    marginLeft: 0,
    marginVertical: 0,
  },
  activeLink: {
    backgroundColor: colors.SECONDARY,
  },
  activeLabel: {
    color: "#E8E8E8"
  }
});
