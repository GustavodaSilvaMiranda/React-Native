import React from 'react';
import {} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


import Formula3 from './Formula3';
import Formula2 from './Formula2';
import Formula1 from './Formula1';

const Tab = createBottomTabNavigator();

export default function Rotasnavbar() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="F3"
        component={Formula3}
        options={{
           tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="shopping-cart" size={size} color={color} />
          ),
        }}
      />
      
      <Tab.Screen
        name="F2"
        component={Formula2}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="car" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="F1"
        component={Formula1}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="car-alt" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
