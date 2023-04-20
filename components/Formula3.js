import * as React from 'react';
import { Text, View, StyleSheet, Dimensions,Image} from 'react-native';
import {AntDesign } from '@expo/vector-icons';

export default function formula3(){
  return(
    <View style={estilo.container}>
        <Text style={estilo.titulo}> Fórmula 3 </Text>
        <Text style={estilo.conceito}> 
          A Fórmula 3, também chamada F3, é uma categoria de competição do automobilismo da classe dos monopostos. Os vários campeonatos realizados ao redor do mundo formam um passo importante para vários jovens pilotos.
        </Text>
        <Image style={estilo.img} resizeMode={'contain'} source={require('../assets/F3,3.jpg')}/>
        <Text style={estilo.subtitulo}> Principais Pilotos: </Text>
        <View style={estilo.fundo}>

        <Text style={estilo.topicos}>
        <AntDesign name="arrowright" size={24} color="black" />
         Victor Martins </Text>
        <Text style={estilo.topicos}>
        <AntDesign name="arrowright" size={24} color="black" />
        Zane Maloney </Text> 
        <Text style={estilo.topicos}>
        <AntDesign name="arrowright" size={24} color="black" />
        Oliver Bearman </Text> 
        <Text style={estilo.topicos}> 
        <AntDesign name="arrowright" size={24} color="black" />
         Isack Hadjar </Text> 
        <Text style={estilo.topicos}> 
        <AntDesign name="arrowright" size={24} color="black" />
        Roman Stanek </Text> 
        </View>
    </View>
  );
}

const largura = Dimensions.get('screen').width ;

const estilo = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#FFFFFF',
  },
  conceito:{
fontSize: 18,
textAlign: 'justify',
margin: 15
  },
  titulo: {
    marginTop: 30,
    marginBottom: 20,
    fontSize: 30,
  },
  subtitulo:{
fontSize: 20,
marginBottom: 20,
marginLeft: 20
  },
  topicos:{
    fontSize: 20,
    marginLeft: 20
  },
  img:{
    width: largura -20,
    height: 200,
    borderRadius: 30,
    margin: 10,
  },
  fundo:{
    flex:1,
    justifyContent:'space-between',
    backgroundColor: '#708090',
    borderRadius: 20,
    marginHorizontal: 20,
  }
})

