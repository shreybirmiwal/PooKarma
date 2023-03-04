import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Map from './screens/Map';
import TakePicture from './screens/TakePicture';

const Tab = createBottomTabNavigator();

export default function App() {

  
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Spotted Poops 👀" component={Map} />
        <Tab.Screen name="Post" component={TakePicture} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}


