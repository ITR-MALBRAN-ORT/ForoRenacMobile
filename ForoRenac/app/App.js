/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';

import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

//Splash Screen module
import SplashScreen from 'react-native-splash-screen';

//Navigation
import MainStack from './navigation/MainStack';
import DrawerNavigation from './navigation/DrawerNavigation';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './ui/screens/login/LoginScreen';
import RegisterScreen from './ui/screens/register/RegisterScreen';

const App = () => {
  //** Hide Splash Screen */
  useEffect(() => {
    //Runs on every render
    SplashScreen.hide();
  });

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <RegisterScreen />
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

export default App;
