import * as React from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';

export default function Inicio() {
  return (
    <View style={estilo.container}>
      <Image
        style={estilo.img}
        source={require('../../assets/CarrosClassicos.gif')}
      />
    </View>
  );
}

const largura = Dimensions.get('screen').width

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alingItems: 'center',
    justifyContent: 'center',
    padding: 0,
    backgroundColor: '#C7505F'
  },
  img: {
    width: largura,
    resizeMode: 'contain',
  },
});
