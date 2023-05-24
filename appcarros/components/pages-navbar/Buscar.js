import * as React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  Button,
  Text,
} from 'react-native';

export default function Buscar(props) {
  return (
    <View style={estilo.container}>
      <ScrollView style={{ flex: 1 }}>
        <TextInput style={estilo.input1} />

        <View style={estilo.colunas}>
          <Image
            style={estilo.item}
            source={require('../../assets/fusca.jpeg')}
          />
        </View>
        <View>
          <Text style={estilo.textos}>
            Fusca
          </Text>
        </View>
        <View style={estilo.colunas}>
          <Image
            style={estilo.item}
            source={require('../../assets/Opala.jpeg')}
          />
        </View>
        <View>
          <Text style={estilo.textos}>
            Opala
          </Text>
        </View>
        <View style={estilo.colunas}>
          <Image
            style={estilo.item}
            source={require('../../assets/Kombi.jpeg')}
          />
        </View>
        <View>
          <Text style={estilo.textos}>
            Kombi
          </Text>
        </View>
        <View style={estilo.colunas}>
          <Image
            style={estilo.item}
            source={require('../../assets/Maverick.jpeg')}
          />
        </View>
        <View>
          <Text style={estilo.textos}>
            Maverick
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alingItems: 'center',
    padding: 0,
    backgroundColor: '#628395',
  },
  input1: {
    backgroundColor: '#FFFAFA',
    margin: 30,
    borderRadius: 100,
    fontSize: 25,
    textAlign:'center',
  },
  item: {
    borderRadius: 10,
    paddingVertical: 10,
    backgroundColor: '#fff',
    marginTop: 15,
    marginBottom: 15,
    marginRight: 15,
    marginLeft: 15,
    paddingLeft: 15,
    paddingRight: 15,
    width: 359,
    height: 250,
  },
  colunas: {
    flexDirection: 'row',
    minwidth: 100,
    borderRadius: 100,
    minheight: 100,
  },
  textos: {
    fontSize:20,
    paddingBottom: 15,
    paddingLeft: 15,
  }
});
