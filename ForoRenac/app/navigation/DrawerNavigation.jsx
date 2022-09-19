import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import ExampleOne from '../screens/ExampleOne';
import ExampleTwo from '../screens/ExampleTwo';
import LandingStackNavigator from './LandingStackNavigator';
import MainStack from './MainStack';
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        overlayColor: 'rgba(28, 70, 112, 0.65)',
      }}
      drawerContent={props => <DrawerContent {...props} />}>
      {/* You can nest other navigations components (Tab or Stack) */}
      <Drawer.Screen name="LandingStackNavigator" component={LandingStackNavigator} />
      {/* <Drawer.Screen name="ExampleOne" component={ExampleOne} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
