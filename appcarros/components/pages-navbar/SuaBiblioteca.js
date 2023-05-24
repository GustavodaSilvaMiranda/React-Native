import * as React from 'react';
import {Text, View, StyleSheet, Image,Button} from 'react-native';


export default function SuaBiblioteca(props){

  return(
    <View style={estilo.container}>
<Text style={estilo.Titulo}>
    Minha Biblioteca
</Text>
    <Button 
title="Artistas"
onPress={()=>{props.navigation.navigate('Artistas')}}
/>
<Button 
title="Playlists"
onPress={()=>{props.navigation.navigate('Playlists')}}
/>

<Button 
title="Podcast"
onPress={()=>{props.navigation.navigate('Podcast')}}
/>


<Image
          style={estilo.item}
          source={require('../../assets/exemplo.png')}
        />
        <Image
          style={estilo.item}
          source={require('../../assets/exemplo.png')}
        />
           <Image
          style={estilo.item}
          source={require('../../assets/exemplo.png')}
        />
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alingItems: 'center',
    justifyContent: 'center',
    padding: 0,
    backgroundColor: '#6ADE80',
  },
  item: {
    paddingVertical: 10,
    textAlign: 'center',
    backgroundColor: '#fff',
    marginTop: 15,
    marginBottom: 15,
    marginRight: 15,
    marginLeft: 15,
    paddingLeft: 15,
    paddingRight: 15,
    width: 350,
    height: 150,
  },
  Titulo:{
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 40
  }

});