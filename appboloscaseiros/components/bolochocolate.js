import * as React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';

export default function Bolochocolate() {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Chocolate Suiço </Text>
      <Text style={styles.textStyle}> 
  Visite o{' '} 
  <Text 
    style={styles.hyperlinkStyle} 
    onPress={() => { 
      Linking.openURL('https://cybercook.com.br/receitas/bolos/bolos-com-recheio-ou-cobertura/receita-de-bolo-suico-de-chocolate-88114'); 
    }}> 
    <Image source={require('../assets/bolo-chocolate.jpg')} />
   
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
        backgroundColor: '#FF6347',
        justifyContent: 'center',
        alignItems: 'center',
    },
     headline: {
        fontWeight: 'bold',
        fontSize: 18,
    marginTop: 0,
        width: 200,
        height: 50,
    backgroundColor: '#FFFACD',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: '10px'
    },
    })