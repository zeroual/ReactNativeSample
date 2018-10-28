/** @format */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {RestaurantSuggestions} from "./src/components/restaurantSuggestions/restaurantSuggestions";

AppRegistry.registerComponent(appName, () => RestaurantSuggestions);
