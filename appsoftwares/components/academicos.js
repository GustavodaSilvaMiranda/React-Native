import * as React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';

export default function academicos() {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Tome: Criador de Apresentações</Text>
      <Text style={styles.textStyle}>  
  <Text 
    style={styles.hyperlinkStyle} 
    onPress={() => { 
      Linking.openURL('https://beta.tome.app/'); 
    }}> 
    <Image source={require('../assets/2.jpg')} />
   
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
        backgroundColor: '#FF6347',
        justifyContent: 'center',
        alignItems: 'center',
    },
     headline: {
        fontWeight: 'bold',
        fontSize: 18,
    marginTop: 0,
    marginBottom:30,
        width: 200,
        height: 50,
    backgroundColor: '#FFFACD',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: '10px'
    },
    })