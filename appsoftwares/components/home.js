import * as React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Home(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Softwares que vão salvar sua vida</Text>
      <Image style={styles.imagem} source={require('../assets/1.png')} />

      <TouchableOpacity onPress={()=>{props.navigation.navigate('academicos')}}>
        <Text style={styles.headline}>Acadêmica</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{props.navigation.navigate('profissionais')}}>
        <Text style={styles.headline}> Profissional </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{props.navigation.navigate('financeiros')}}>
        <Text style={styles.headline}> Financeira</Text>
      </TouchableOpacity>

        <Text>Clique nos Softwares para acessar a documentação</Text>

    </View>

    
  );
}
var styles = StyleSheet.create({
container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#483D8B',
        justifyContent: 'center',
        alignItems: 'center',
    },
     headline: {
        fontWeight: 'bold',
        fontSize: 18,
    marginTop: 0,
        width: 200,
        height: 80,
        margin: 4,
    backgroundColor: '#87CEEB',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: '10px',
         borderRadius: '10px'
         
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

