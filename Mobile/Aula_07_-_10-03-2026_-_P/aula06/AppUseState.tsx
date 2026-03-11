import { StatusBar } from 'expo-status-bar';
import { use, useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  const [fiap, SetFiap] = useState(12);
  const [nome, SetNome] = useState("Joao");
  return (
    <View style={{flex: 1, justifyContent: "center", margin: 10}}>
      <TextInput value={nome} onChangeText={(txt) => {SetNome(txt)}}></TextInput>
      <Text style={{alignSelf: "center"}}>{fiap}</Text>
      <Button title="+" onPress={() => { 
        SetFiap(fiap+1)
        console.log(fiap);
      }}/>
    </View>
  );
}

