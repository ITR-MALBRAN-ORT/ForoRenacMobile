import { createStackNavigator } from '@react-navigation/stack';
import {
    NAVIGATOR,
    LANDING_STACK,
    } from '../navigation/NavigatorConstants';
import LandingScreen from '../ui/screens/LandingScreen/LandingScreen';

const Stack = createStackNavigator();

const LandingStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={"LANDING"}>
        <Stack.Screen 
            name={"LANDING"}
            component={LandingScreen}
        />
    </Stack.Navigator>
  )
}

export default LandingStackNavigator;