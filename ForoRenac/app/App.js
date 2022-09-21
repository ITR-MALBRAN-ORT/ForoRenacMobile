import React, {useEffect} from 'react';
import {
  SafeAreaView,
} from 'react-native';

//Splash Screen module
import SplashScreen from 'react-native-splash-screen';
//Navigation
import MainStack from './navigation/MainStack';
import DrawerNavigation from './navigation/DrawerNavigation';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import  LoginStackNavigator  from './navigation/LoginStackNavigator';
import LandingStackNavigator from './navigation/LandingStackNavigator';

import { Text, View } from 'react-native';
const App = () => {
  //** Hide Splash Screen */
  useEffect(() => {
    //Runs on every render
    SplashScreen.hide();
  });

  const Stack = createStackNavigator();
  let state = {
    userToken: "#sad",
  }
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          {state.userToken == null ? (
            <LoginStackNavigator />
          ) : (
            <DrawerNavigation />
          )}
        </NavigationContainer>
        </SafeAreaView>
    </>
  );
};

export default App;