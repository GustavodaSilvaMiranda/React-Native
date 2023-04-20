import * as React from 'react';
import { Text, View, StyleSheet, Dimensions,Image} from 'react-native';
import {AntDesign } from '@expo/vector-icons';0
import { Feather } from '@expo/vector-icons';

export default function Formula1(){
  return(
    <View style={estilo.container}>
        <Text style={estilo.titulo}> Fórmula 1 </Text>
        <Text style={estilo.conceito}> 
         Fórmula 1 é a mais popular modalidade de automobilismo do mundo. É a categoria mais avançada do esporte a motor e é regulamentada pela Federação Internacional de Automobilismo.
        </Text>
        <Image style={estilo.img} resizeMode={'contain'} source={require('../assets/F1.jpg')}/>
        <Text style={estilo.subtitulo}> Principais Pilotos: </Text>
        <View style={estilo.fundo}>

        <Text style={estilo.topicos}>
        <AntDesign name="arrowright" size={24} color="black" />
         Lewis Hamilton (ING) </Text>
        <Text style={estilo.topicos}>
        <AntDesign name="arrowright" size={24} color="black" />
         Ayrton Senna (BRA) </Text> 
        <Text style={estilo.topicos}>
        <AntDesign name="arrowright" size={24} color="black" /> 
        Juan Manuel Fangio (ARG) </Text> 
        <Text style={estilo.topicos}> 
        <AntDesign name="arrowright" size={24} color="black" />
        Jim Clark (ESC)  </Text> 
        <Text style={estilo.topicos}> 
        <AntDesign name="arrowright" size={24} color="black" />
        Alain Prost (FRA) </Text> 
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
    backgroundColor: '#FF4204',
    borderRadius: 20,
    marginHorizontal: 20,
    paddingVertical:20,
    justifyContent:'space-between',
  }
})

