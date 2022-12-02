import { createStackNavigator } from "@react-navigation/stack"
import DataMotherScreen from "../ui/screens/FormsNewCase/DataMother/DataMotherScreen"
import { NEW_CASE } from "./NavigationConstants"
import DataChildScreen from "../ui/screens/FormsNewCase/DataChild/DataChildScreen"
import DataMalformationScreen from "../ui/screens/FormsNewCase/DataMalformation/DataMalformationScreen"
const NewCaseStackNavigator = () =>{
    const Stack = createStackNavigator()
    return(
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName={NEW_CASE.FORM_MALFORMATION} >
            <Stack.Screen name={NEW_CASE.FORM_MOTHER} component={DataMotherScreen}/>
            <Stack.Screen name={NEW_CASE.FORM_CHILD} component={DataChildScreen} />
            <Stack.Screen name={NEW_CASE.FORM_MALFORMATION} component={DataMalformationScreen}/>
        </Stack.Navigator>
    )
}
export default NewCaseStackNavigator