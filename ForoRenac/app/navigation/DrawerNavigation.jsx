import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabNavigation from './bottomTabs/BottomTabNavigation'
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
      <Drawer.Screen
        name="BottomTabNavigation"
        component={BottomTabNavigation}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
