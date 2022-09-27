import { createStackNavigator } from "@react-navigation/stack"
import DataMotherScreen from "../ui/screens/formsNewCase/DataMother/DataMotherScreen"
import DataFatherScreen from "../ui/screens/formsNewCase/DataFather/DataFatherScreen"
import { NEW_CASE } from "./NavigationConstants"
import DataChildScreen from "../ui/screens/formsNewCase/DataChild/DataChildScreen"
import DataMalformationScreen from "../ui/screens/formsNewCase/DataMalformation/DataMalformationScreen"
import DataEstudiosScreens from "../ui/screens/formsNewCase/DataEstudios/DataEstudiosScreen"
const NewCaseStackNavigator = () =>{
    const Stack = createStackNavigator()
    return(
        <Stack.Navigator screenOptions={{headerShown:false}} >
            <Stack.Screen name={NEW_CASE.FORM_MOTHER} component={DataMotherScreen}/>
            <Stack.Screen name={NEW_CASE.FORM_FATHER} component={DataFatherScreen}/>
            <Stack.Screen name={NEW_CASE.FORM_CHILD} component={DataChildScreen} />
            <Stack.Screen name={NEW_CASE.FORM_MALFORMATION} component={DataMalformationScreen}/>
            <Stack.Screen name={NEW_CASE.FORM_ESTUDIOS} component={DataEstudiosScreens}/> 
        </Stack.Navigator>
    )
}
export default NewCaseStackNavigator