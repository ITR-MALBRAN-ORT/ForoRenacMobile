import { createStackNavigator } from '@react-navigation/stack';
import {
    NAVIGATOR,
    LOGIN_STACK,
    } from './NavigationConstants';
import LoginScreen from '../ui/screens/login/LoginScreen';
import RegisterScreen from '../ui/screens/register/RegisterScreen';

const Stack = createStackNavigator();

const LoginStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={NAVIGATOR.LOGIN_FLOW}>
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
            component={LoginScreen}
        />
    </Stack.Navigator>
  )
}

export default LoginStackNavigator;