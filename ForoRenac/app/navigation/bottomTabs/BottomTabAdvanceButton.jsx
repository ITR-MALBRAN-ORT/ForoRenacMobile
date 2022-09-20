import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import React from 'react';
import { TabBg } from './TabBg';



const BottomTabAdvanceButton = ({bgColor,icon, ...props}) => {
  return (
    <View style={styles.container} pointerEvents="box-none">
      <TabBg color={bgColor} style={styles.background} />
      <TouchableOpacity style={styles.button} onPress={props.onPress}>
        {icon}
      </TouchableOpacity>
    </View>
  );
};

export default BottomTabAdvanceButton;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 75,
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
  },
  button: {
    top: -22.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 27,
    backgroundColor: '#1DC690',
  },
  buttonIcon: {
    fontSize: 35,
    color: 'white',
  },
  extraLayer: {
    backgroundColor: '#6e6127',
    position: 'absolute',
    top: 10,
  },
});
