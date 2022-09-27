import { createStackNavigator } from '@react-navigation/stack';
import {
    NAVIGATOR,
    LOGIN_STACK,
    } from './NavigationConstants';

import LoginScreen from '../ui/screens/login/LoginScreen';
import RegisterScreen from '../ui/screens/register/RegisterScreen';
import PasswordRecoveryScreen from '../ui/screens/passwordRecovery/PasswordRecoveryScreen';
import CodeVerificationScreen from '../ui/screens/codeVerification/CodeVerificationScreen';
import ResetPasswordScreen from '../ui/screens/resetPassword/ResetPasswordScreen';
const Stack = createStackNavigator();

const LoginStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={NAVIGATOR.LOGIN_FLOW} screenOptions={{headerShown:false}}>
        <Stack.Screen 
            name={LOGIN_STACK.LOGIN_SCREEN}
            component={LoginScreen}
        />
        <Stack.Screen 
            name={LOGIN_STACK.REGISTER_SCREEN}
            component={RegisterScreen}
        />
        <Stack.Screen 
            name={LOGIN_STACK.PASSWORD_RECOVERY_SCREEN}
            component={PasswordRecoveryScreen}
        />
        <Stack.Screen
            name={LOGIN_STACK.CODE_VERIFICATION_SCREEN}
            component={CodeVerificationScreen}
        />
        <Stack.Screen
            name={LOGIN_STACK.RESET_PASSWORD_SCREEN}
            component={ResetPasswordScreen}
        />
    </Stack.Navigator>
  )
}

export default LoginStackNavigator;