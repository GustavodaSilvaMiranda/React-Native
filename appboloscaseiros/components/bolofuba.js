import * as React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';

export default function Bolofuba() {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Fubá Quentinho</Text>
     <Text style={styles.textStyle}> 
  Visite o{' '} 
  <Text 
    style={styles.hyperlinkStyle} 
    onPress={() => { 
      Linking.openURL('https://cybercook.com.br/receitas/bolos/bolo-de-fuba-cremoso-de-liquidificador-109747'); 
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
        backgroundColor: '#FFEFD5',
        justifyContent: 'center',
        alignItems: 'center',
    },
     headline: {
        fontWeight: 'bold',
        fontSize: 18,
    marginTop: 0,
        width: 200,
        height: 50,
    backgroundColor: '#FFE4B5',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
         borderRadius: '10px'
    },
    })