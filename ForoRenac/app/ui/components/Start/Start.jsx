import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import LoginStackNavigator from '../../../navigation/LoginStackNavigator';
import DrawerNavigation from '../../../navigation/DrawerNavigation';
import { NavigationContainer } from '@react-navigation/native';

export default function Start() {
  const {token, loading, email, requireNewPassword} = useSelector(state => state.auth);
  return (
    <NavigationContainer>
            {token ? (
              <DrawerNavigation />
            ) : (
              <LoginStackNavigator />
            )}
    </NavigationContainer>
  )
}


