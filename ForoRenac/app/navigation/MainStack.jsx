import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LandingScreen from '../ui/screens/LandingScreen/LandingScreen';
import LoginScreen from '../ui/screens/login/LoginScreen';

const Stack = createStackNavigator();

export default MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Landing" component={LandingScreen} />
      </Stack.Navigator>
  );
};
