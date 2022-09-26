import React, {useEffect} from 'react';
import {
  SafeAreaView,
} from 'react-native';

//Splash Screen module
import SplashScreen from 'react-native-splash-screen';
//Navigation
import DrawerNavigation from './navigation/DrawerNavigation';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import  LoginStackNavigator  from './navigation/LoginStackNavigator';

import { Text, View } from 'react-native';

//Redux
import { Provider } from 'react-redux';
import { store } from './redux/Store';


const App = () => {
  //** Hide Splash Screen */
  useEffect(() => {
    //Runs on every render
    SplashScreen.hide();
  });

  const Stack = createStackNavigator();
  let state = {
    userToken: "null",
  }
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          {state.userToken == null ? (
            <LoginStackNavigator />
          ) : (
            <DrawerNavigation />
          )}
        </NavigationContainer>
        </SafeAreaView>
    </Provider>
  );
};

export default App;