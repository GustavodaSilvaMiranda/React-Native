import * as React from 'react';
import { Text, View, StyleSheet, Dimensions,Image} from 'react-native';
import {AntDesign } from '@expo/vector-icons';

export default function Formula2(){
  return(
    <View style={estilo.container}>
        <Text style={estilo.titulo}> Fórmula 2 </Text>
        <Text style={estilo.conceito}> 
         Fórmula 2 é um tipo de corrida de fórmula criada em 1948. Considerada a categoria de acesso à Fórmula 1, foi substituída pela Fórmula 3000 em 1985 por estar se tornando muito cara. Mas foi revivida pela Federação Internacional de Automobilismo (FIA).
        </Text>
        <Image style={estilo.img} resizeMode={'contain'} source={require('../assets/F2,2.jpg')}/>
        <Text style={estilo.subtitulo}> Principais Pilotos: </Text>
        <View style={estilo.fundo}>

        <Text style={estilo.topicos}>
        <AntDesign name="arrowright" size={24} color="black" />
         Felipe Drugovich </Text>
        <Text style={estilo.topicos}>
        <AntDesign name="arrowright" size={24} color="black" />
        Théo Pourchaire </Text> 
        <Text style={estilo.topicos}>
        <AntDesign name="arrowright" size={24} color="black" />
        Liam Lawson </Text>
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
    backgroundColor: '#B0C4DE',
    borderRadius: 20,
    marginHorizontal: 20,
    paddingVertical: 20,
    justifyContent:'space-between',
  }
})

