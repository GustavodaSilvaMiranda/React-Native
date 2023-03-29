import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import academicos from './academicos';
import financeiros from './Financeiros';
import profissionais from './profissionais';
import Home from './home';

const Stack = createStackNavigator();

export default function Rotas() {
  return (
  <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="academicos" component={academicos} />
        <Stack.Screen name="financeiros" component={financeiros} />
        <Stack.Screen name="profissionais" component={profissionais} />
    </Stack.Navigator>
  </NavigationContainer>
  )

}
