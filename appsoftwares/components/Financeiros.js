import * as React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';

export default function Bolomilho() {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Controlle: controle todas suas despesas</Text>
      
      <Text style={styles.textStyle}> 
  <Text 
    style={styles.hyperlinkStyle} 
    onPress={() => { 
      Linking.openURL('https://www.controlle.com/?gclid=EAIaIQobChMIgN6a7IOA_gIVPEZIAB2yKA0xEAAYASAAEgKDl_D_BwE'); 
    }}> 
    <Image style={styles.imagem}  source={require('../assets/3.png')} />
   
  </Text> 
</Text>
       <Text>Clique nos Softwares para acessar a documentação</Text>
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
    },
       imagem: {
       
        width: 300,
        height: 180,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: '10px',
  
         
    },
    })