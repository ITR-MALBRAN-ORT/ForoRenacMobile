import React, {useEffect} from 'react';

import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  Text
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

//Splash Screen module
import SplashScreen from 'react-native-splash-screen';

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './navigation/MainStack';
import DrawerNavigation from './navigation/DrawerNavigation';
import LoginScreen from './ui/screens/login/LoginScreen';
import RegisterScreen from './ui/screens/register/RegisterScreen';
import CustomTable from './ui/components/customTable/CustomTable';

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
        <Text style={{color: "#fff"}}>APP</Text>
        <CustomTable></CustomTable>
        {/* <NavigationContainer>
          <RegisterScreen />
        </NavigationContainer> */}
      </SafeAreaView>
    </>
  );
};

export default App;
