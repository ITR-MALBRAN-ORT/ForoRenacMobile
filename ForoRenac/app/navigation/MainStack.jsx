import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../components/login/LoginScreen';
import LandingScreen from '../components/landingScreen/LandingScreen';

const Stack = createNativeStackNavigator();

export default MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Landing" component={LandingScreen} />
      </Stack.Navigator>
  );
};
