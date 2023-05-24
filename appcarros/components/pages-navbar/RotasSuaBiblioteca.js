import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Artistas  from '../pages-SuaBiblioteca/Artistas';
import Playlists from '../pages-SuaBiblioteca/Playlist';
import Podcast from '../pages-SuaBiblioteca/Podcast';
import SuaBiblioteca from './SuaBiblioteca';

const Stack = createStackNavigator();

export default function RotasSuaBiblioteca(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SuaBiblioteca" component={SuaBiblioteca}/>
      <Stack.Screen name="Podcast" component={Podcast}/>
      <Stack.Screen name="Playlists" component={Playlists}/>
      <Stack.Screen name="Artistas" component={Artistas}/>
    </Stack.Navigator>
  );
}