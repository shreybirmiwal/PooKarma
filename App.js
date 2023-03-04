import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Map from './screens/Map';
import TakePicture from './screens/TakePicture';
import Leaderboard from './screens/Leaderboard';
import Splash from './screens/Splash';

const Tab = createBottomTabNavigator();

export default function App() {

  
  return (
    <Splash/>
  );
}


