import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Classicos  from '../pages-Buscar/Classicos';
import Pop from '../pages-Buscar/Pop';
import Rocks from '../pages-Buscar/Rocks';
import Samba from '../pages-Buscar/Samba';
import Buscar from './Buscar';

const Stack = createStackNavigator();

export default function RotasBuscar(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Buscar" component={Buscar}/>
      <Stack.Screen name="Classicos" component={Classicos}/>
      <Stack.Screen name="Pop" component={Pop}/>
      <Stack.Screen name="Rock" component={Rocks}/>
      <Stack.Screen name="Samba" component={Samba}/>
    </Stack.Navigator>
  );
}