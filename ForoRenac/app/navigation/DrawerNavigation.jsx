import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabNavigation from './bottomTabs/BottomTabNavigation';
import DrawerContent from './DrawerContent';
import SVGForoRenac from '../assets/images/VectorForoRenac.svg';
import SVGBell from '../assets/images/VectorBellNotification.svg';
import { LOGIN_STACK } from './NavigationConstants';
import ResetPasswordScreen from '../ui/screens/ResetPassword/ResetPasswordScreen';
import { useSelector } from 'react-redux';
const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  const {requireNewPassword} = useSelector(state => state.auth)
  return (
    <Drawer.Navigator
      screenOptions={{
        overlayColor: 'rgba(28, 70, 112, 0.65)',
        headerTitleAlign: 'center',
        headerTintColor: '#ffffff',
        headerStyle: {backgroundColor: '#1C4670',},
        headerTitle: props => <SVGForoRenac height={35} {...props}/>,
        headerRight: props => <SVGBell height={21} {...props}/>,
        headerRightContainerStyle: {right:20}
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
