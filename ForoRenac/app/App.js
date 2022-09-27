import React, { useEffect } from 'react';
import {
  SafeAreaView,
} from 'react-native';

//Splash Screen module
import SplashScreen from 'react-native-splash-screen';
//Navigation
import DrawerNavigation from './navigation/DrawerNavigation';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginStackNavigator from './navigation/LoginStackNavigator';
import { Text, View } from 'react-native';
//Redux
import { Provider, useSelector } from 'react-redux';
import { store } from './redux/Store';
//Persistance
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import Start from './ui/components/Start/Start';
let persistor = persistStore(store);


const App = () => {
  //** Hide Splash Screen */
  useEffect(() => {
    //Runs on every render
    SplashScreen.hide();
  });

  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={{ flex: 1 }}>
            <Start></Start>
        </SafeAreaView>
      </PersistGate>
    </Provider>


  );
};

export default App;

