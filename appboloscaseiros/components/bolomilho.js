import * as React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';

export default function Bolomilho() {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Milho Cremoso</Text>
      
      <Text style={styles.textStyle}> 
  Visite o{' '} 
  <Text 
    style={styles.hyperlinkStyle} 
    onPress={() => { 
      Linking.openURL('https://cybercook.com.br/receitas/bolos/bolos-com-recheio-ou-cobertura/receita-de-bolo-maravilhoso-de-milho-47509'); 
    }}> 
    <Image source={require('../assets/bolo-milho.jpg')} />
   
  </Text> 
</Text>
       <Text>Cliqe no bolo para ver a receita</Text>
    </View>
  );
}

var styles = StyleSheet.create({
container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#D8BFD8',
        justifyContent: 'center',
        alignItems: 'center',
    },
     headline: {
        fontWeight: 'bold',
        fontSize: 18,
    marginTop: 0,
        width: 200,
        height: 50,
    backgroundColor: '#FFE4E1',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: '10px',
         borderRadius: '10px'
    },
    })