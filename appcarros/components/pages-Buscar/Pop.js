import * as React from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';

export default function Pop() {
  return (
    <View style={estilo.container}>
      <Image
        style={estilo.img}
        source={require('../../assets/exemplo.png')}
      />
          <Text>Músicas Pop </Text>
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
    backgroundColor: '#50BBC7'
  },
  img: {
    width: largura,
    resizeMode: 'contain',
  },
});