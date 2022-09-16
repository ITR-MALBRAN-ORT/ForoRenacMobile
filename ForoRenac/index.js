/**
 * @format
 */

// Necessary for Drawer
// * make sure 'react-native-gesture-handler'
// * it's at the top and there's nothing else before it
import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';
import App from './app/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
