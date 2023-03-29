import * as React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';

export default function Bolofuba() {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Capterra: gerencie qualquer nicho</Text>
     <Text style={styles.textStyle}> 

  <Text 
    style={styles.hyperlinkStyle} 
    onPress={() => { 
      Linking.openURL('https://www.capterra.com.br/sem/compare/directory/30002/project-management/software?account_campaign_id=11118603751&account_adgroup_id=108677015163&target=software%20para%20projetos&ad_id=465631381653&matchtype=b&gclsrc=aw.ds&&utm_source=ps-google&utm_medium=ppc&utm_campaign=:1:CAP:2:TLD-BR:3:All:4:LATAM:5:BAU:6:SOF:7:Desktop:8:BR:9:Project_Management&gclid=EAIaIQobChMIuJmKiYSA_gIVUuVcCh27iw4SEAAYAyAAEgLnBPD_BwE'); 
    }}> 
    <Image style={styles.imagem}  source={require('../assets/4.png')} />
   
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