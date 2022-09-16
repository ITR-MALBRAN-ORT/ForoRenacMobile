import React from 'react';
import {Pressable, Text, TextInput, View, StyleSheet} from 'react-native';
import SVGImg from '../assets/images/VectorForoRenac.svg';

export default ForoRenac = props => {
  return (
    <View style={styles.container}>
      {/* <SVGImg width={22} height={44} /> */}
      <Text style={styles.text}>
        {' '}
        Foro {'\n'}
        <Text style={styles.textBold}> Renac</Text>
      </Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    width: 231,
    height: 96,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {color: '#E8E8E8', fontSize: 24, fontFamily: 'Montserrat'},
  textBold: {fontWeight: 'bold'},
});
