import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import Rotas from './components/pages-navbar/RotasTab';


export default function App() {
  return (
    <NavigationContainer>
       <Rotas/>
    </NavigationContainer>
  );
}
