import { createStackNavigator } from "@react-navigation/stack"
import DataMotherScreen from "../ui/screens/FormsNewCase/DataMother/DataMotherScreen"
import DataFatherScreen from "../ui/screens/FormsNewCase/DataFather/DataFatherScreen"
import { NEW_CASE } from "./NavigationConstants"
import DataChildScreen from "../ui/screens/FormsNewCase/DataChild/DataChildScreen"
import DataMalformationScreen from "../ui/screens/FormsNewCase/DataMalformation/DataMalformationScreen"
import DataEstudiosScreens from "../ui/screens/FormsNewCase/DataEstudios/DataEstudiosScreen"
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