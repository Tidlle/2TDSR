import { StatusBar } from 'expo-status-bar';
import { use, useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

const lista : Array<object> = []

export default function App() {
  const [nome, setNome] = useState<string>("");
  const [telefone, setTelefone] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  return (
    <View style={{flex: 1, justifyContent: "center", margin: 10}}>
      <Text>Agenda de contados</Text>
      <TextInput style={{backgroundColor: "lightblue"}} placeholder='Nome' value={nome} onChangeText={setNome}></TextInput>
      <TextInput style={{backgroundColor: "lightblue"}} placeholder='Telefone' value={telefone} onChangeText={setTelefone}></TextInput>
      <TextInput style={{backgroundColor: "lightblue"}} placeholder='Email' value={email} onChangeText={setEmail}></TextInput>
      <Button title="Salvar" onPress={() => { 
        const obj = {nome: nome, telefone: telefone, email: email};
        lista.push( obj );
        setNome("");
        setTelefone("");
        setEmail("");
      }}/>
      <Button title="Pesquisar" onPress={()=>{
        for(let contato of lista) { 
          if (contato.nome.includes(nome)) { 
            setNome(contato.nome);
            setTelefone(contato.telefone);
            setEmail(contato.email);
          }
        }
      }} />
    </View>
  );
}

