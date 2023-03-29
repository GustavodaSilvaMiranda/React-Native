import * as React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Home(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>As melhores Receitas de Bolo </Text>
      <Image source={require('../assets/principal-bolo.jpg')} />

      <TouchableOpacity onPress={()=>{props.navigation.navigate('BoloChocolate')}}>
        <Text style={styles.headline}> Bolo de Chocolate </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{props.navigation.navigate('BoloFuba')}}>
        <Text style={styles.headline}> Bolo de Fubá </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{props.navigation.navigate('BoloMilho')}}>
        <Text style={styles.headline}> Bolo de Milho </Text>
      </TouchableOpacity>

        <Text>Clique nos bolos para acessar a receita</Text>

    </View>

    
  );
}
var styles = StyleSheet.create({
container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        alignItems: 'center',
    },
     headline: {
        fontWeight: 'bold',
        fontSize: 18,
    marginTop: 0,
        width: 200,
        height: 50,
        margin: 4,
    backgroundColor: '#F0FFFF',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: '10px',
         borderRadius: '10px'
         
    },
    })

