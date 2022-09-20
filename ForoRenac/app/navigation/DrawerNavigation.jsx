import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import LandingStackNavigator from './LandingStackNavigator';
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
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
