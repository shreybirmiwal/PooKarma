import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Map from './screens/Map';
import TakePicture from './screens/TakePicture';
import Leaderboard from './screens/Leaderboard';

const Tab = createBottomTabNavigator();

export default function App() {

  
  return (
    <NavigationContainer>
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: '#7A5901',
        },
        activeTintColor: 'black',
        inactiveTintColor: '#A89166',
      }}
    >
      <Tab.Screen
        name="Spotted Poops 👀"
        component={Map}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="eye-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Pick up a poop! 💩"
        component={TakePicture}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="emoticon-poop" color={color} size={size} />
          ),
        }}
      />
        <Tab.Screen
        name="Leaderboard"
        component={Leaderboard}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="trophy-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
    </NavigationContainer>
  );
}


