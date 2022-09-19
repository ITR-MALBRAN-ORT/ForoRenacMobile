import { createStackNavigator } from '@react-navigation/stack';
import {
    NAVIGATOR,
    LANDING_STACK,
    } from './NavigationConstants';
import LandingScreen from '../ui/screens/LandingScreen/LandingScreen';

const Stack = createStackNavigator();

const LandingStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={NAVIGATOR.LANDING_FLOW}>
        <Stack.Screen 
            name={LANDING_STACK.CASOS_SCREEN}
            component={LandingScreen}
        />
    </Stack.Navigator>
  )
}

export default LandingStackNavigator;