import { createStackNavigator } from '@react-navigation/stack';
import {
    NAVIGATOR,
    LOGIN_STACK,
    } from '../navigation/NavigatorConstants';
import LoginScreen from '../ui/screens/login/LoginScreen';
import RegisterScreen from '../ui/screens/register/RegisterScreen';

const Stack = createStackNavigator();

const LoginStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={"LOGIN"}>
        <Stack.Screen 
            name={"LOGIN"}
            component={LoginScreen}
        />
        <Stack.Screen 
            name={"REGISTER"}
            component={RegisterScreen}
        />
        <Stack.Screen 
            name={"PASSWORD_RECOVERY"}
            component={LoginScreen}
        />
    </Stack.Navigator>
  )
}

export default LoginStackNavigator;