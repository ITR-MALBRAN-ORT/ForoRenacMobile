import {View, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from "../../ui/styles/Theme"

// BottomTabBar
import {BottomTabBar} from '@react-navigation/bottom-tabs';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const BottomTabCustom = props => {
  return (
    <View style={styles.navigatorContainer}>
      <BottomTabBar {...props} />
      {/* {IS_IPHONE_X && (
        <View
          style={[
            styles.xFillLine,
            {
              backgroundColor: barColor,
            },
          ]}
        />
      )} */}
    </View>
  );
};

export default BottomTabCustom;

const styles = StyleSheet.create({
  navigatorContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
});
