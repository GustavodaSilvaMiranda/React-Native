import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import  AppLoading  from "expo-app-loading";
import { useFonts, Tilt_Prism } from "@expo-google-fonts/dev";

function App() {
  let { fontsLoaded } = useFonts({
    Tilt_Prism
  });

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Os melhores videogames do planeta</Text>
      <FlatList
      data={arrayconsole}
      renderItem={({item})=>
      <View style={styles.container}>
      <Image style={styles.img}source={item.capa}/>
      <Text style={styles.console}> {''} {item.console} - {item.ano} - {item.jogos} {''} </Text> </View>
      }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    jsutifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8
  },
  titulo: {
    fontSize: 40,
    color: "#ff5a73",
    fontFamily: "Lato_400Regular"
  },
  img:{
    borderRadious:
  }
});



const arrayconsole =[
   {console: 'nintendinho', ano:'1970', jogos: 'mario', capa: require('./nintendinho.jpg')},
   {console:'playstation5',ano:'2022', jogos:'spider man', capa: require('./ps5.jpg')},
    {console:'playstation2',ano:'2012', jogos:'spider man', capa: require('./ps2.jpg')},
        {console:'gameboy',ano:'2012', jogos:'spider man', capa: require('./game_boy.jpg')},
    {console:'segasaturn',ano:'2012', jogos:'spider man', capa: require('./saturn.jpg')}
]

export default App;
