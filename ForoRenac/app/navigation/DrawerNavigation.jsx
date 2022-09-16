import {View, Text} from 'react-native';
import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import ExampleOne from '../screens/ExampleOne';
import ExampleTwo from '../screens/ExampleTwo';
import MainStack from './MainStack';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      {/* You can nest other navigations components (Tab or Stack) */}
      <Drawer.Screen name="MainStackNavigation" component={MainStack} />
      <Drawer.Screen name="ExampleOne" component={ExampleOne} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
