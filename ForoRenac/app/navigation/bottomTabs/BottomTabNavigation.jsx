import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text} from 'react-native';
import BottomTabCustom from './BottomTabCustom';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomTabAdvanceButton from './BottomTabAdvanceButton';
import LandingScreen from '../../ui/screens/landingScreen/LandingScreen';
import LandingStackNavigator from '../LandingStackNavigator';
import LoginStackNavigator from '../LoginStackNavigator';
import NewCaseStackNavigator from '../NewCaseStackNavigator';
// Creating Bottom Tab
const Tab = createBottomTabNavigator();

// TODO remove after replace by real components
import ExampleZero from './screens/ExampleZero';
import ExampleOne from './screens/ExampleOne';
import ExampleTwo from './screens/ExampleTwo';

const tabs = {
  tabOne: {
    tabScreenName: 'ExampleZero',
    tabScreenComponent: LandingStackNavigator,
    iconName: 'folder-open',
    label: 'casos',
  },
  buttonTab: {
    tabScreenName: 'ExampleOne',
    tabScreenComponent: NewCaseStackNavigator,
    iconName: 'plus',
    
  },
  tabTwo: {
    tabScreenName: 'ExampleTwo',
    tabScreenComponent: LandingStackNavigator,
    iconName: 'folder-multiple',
    label: 'historial',
  },
};

export default function BottomTabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName={tabs.tabOne.tabScreenName}
      tabBar={props => <BottomTabCustom {...props} />}
      screenOptions={{
        headerShown: false,
        showIcon: true,
        style: styles.navigator,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: styles.bar.color,
          height: 55,
        },
        tabBarItemStyle: {
          padding: 5,
        },
      }}>
      <Tab.Screen
        name={tabs.tabOne.tabScreenName}
        component={tabs.tabOne.tabScreenComponent}
        options={{
          tabBarIcon: ({color, focused}) => (
            <MCIcon
              name={tabs.tabOne.iconName}
              solid
              size={30}
              color={
                focused ? styles.tabBarIcon.isFocus : styles.tabBarIcon.notFocus
              }
            />
          ),
          tabBarLabel: ({color, focused}) => (
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 14,
                color: focused
                  ? styles.tabBarIcon.isFocus
                  : styles.tabBarIcon.notFocus,
              }}>
              {tabs.tabOne.label.toUpperCase()}
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name={tabs.buttonTab.tabScreenName}
        component={tabs.buttonTab.tabScreenComponent}
        options={{
          tabBarButton: props => (
            <BottomTabAdvanceButton
              bgColor={styles.bar.color}
              icon={
                <MCIcon
                  name={tabs.buttonTab.iconName}
                  style={styles.buttonIcon}
                />
              }
              {...props}
            />
          ),
        }}
      />
      <Tab.Screen
        name={tabs.tabTwo.tabScreenName}
        component={tabs.tabTwo.tabScreenComponent}
        options={{
          tabBarIcon: ({color, focused}) => (
            <MCIcon
              name={tabs.tabTwo.iconName}
              solid
              size={24}
              color={
                focused ? styles.tabBarIcon.isFocus : styles.tabBarIcon.notFocus
              }
            />
          ),
          tabBarLabel: ({color, focused}) => (
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 14,
                color: focused
                  ? styles.tabBarIcon.isFocus
                  : styles.tabBarIcon.notFocus,
              }}>
              {tabs.tabTwo.label.toUpperCase()}
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  navigator: {
    borderTopWidth: 0,
    backgroundColor: 'transparent',
    elevation: 30,
  },
  bar: {
    color: 'white',
  },
  tabBarIcon: {
    isFocus: '#1C4670',
    notFocus: 'rgba(39, 138, 176, 0.59)',
  },
  tabBarLabel: {
    isFocus: '#1C4670',
    notFocus: 'rgba(39, 138, 176, 0.59)',
  },
  buttonIcon: {
    fontSize: 35,
    color: 'white',
  },
});
