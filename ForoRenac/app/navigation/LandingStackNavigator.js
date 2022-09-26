import { createStackNavigator } from '@react-navigation/stack';
import {
    NAVIGATOR,
    LANDING_STACK,
    } from './NavigationConstants';
import LandingScreen from '../ui/screens/LandingScreen/LandingScreen';
import CaseDetail from '../ui/components/CaseDetail/CaseDetail';

const Stack = createStackNavigator();

const LandingStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={NAVIGATOR.LANDING_FLOW}>
        <Stack.Screen 
            name={LANDING_STACK.CASOS_SCREEN}
            component={LandingScreen}
            options={{headerShown:false}}
        />
        <Stack.Screen
          name={LANDING_STACK.DETAIL_SCREEN}
          component={CaseDetail}
          options={{headerShown:false}}
        />
    </Stack.Navigator>
  )
}

export default LandingStackNavigator;