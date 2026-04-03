import React from 'react';
import {Button, View, Text, ToastAndroid, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default () => {

  const a = 1048;

  const contato = {nome: "Joao Silva", telefone: "(11) 1111-1111"} 

  return ( 
    <View style={{flex: 1, marginTop: 50,justifyContent: "center"}}>
      <Text> Teste de Async Storage </Text>
      <Button title="Gravar Numero" onPress={()=>{
        AsyncStorage.setItem( "MEU_NUMERO", 
                          a.toString() // "1048"
                        );
        Alert.alert("Numero gravado com sucesso");
      }}/>

      <Button title="Gravar Objeto" onPress={()=>{
        AsyncStorage.setItem( "CONTATO", 
                          JSON.stringify(contato)
                        );
        Alert.alert("Contato gravado com sucesso");
      }}/>

      <Button title="Ler Numero" onPress={ ()=>{
        console.log("Lendo numero do AsyncStorage - inicio");
        AsyncStorage.getItem( "MEU_NUMERO" )
        .then(( valor : string | null )=>{
          console.log("Numero lido com sucesso: " + valor);
          Alert.alert("Numero lido com sucesso: " + valor);
        })
        .catch(( err : any)=>{
          console.log("Erro ao executar a leitura: " + err);
          Alert.alert("Erro ao executar a leitura: " + err);
        })
        console.log("Lendo numero do AsyncStorage - termino");
      }}/>

      <Button title="Ler Todas as Chaves" onPress={ ()=>{
        AsyncStorage.getAllKeys()
        .then(( valor : any | null )=>{
          console.log("Chaves lidas: " + valor);
          Alert.alert("Chaves lidas: " + valor);
        })
        .catch(( err : any)=>{
          console.log("Erro ao executar a leitura: " + err);
          Alert.alert("Erro ao executar a leitura: " + err);
        })
      }}/>    
      <Button title="Ler Contato" onPress={ ()=>{
        AsyncStorage.getItem( "CONTATO" )
        .then(( valor : string | null )=>{
          console.log("Numero lido com sucesso: " + valor);
          Alert.alert("Numero lido com sucesso: " + valor);
          if (valor != null) {
          const c = JSON.parse(valor);
          Alert.alert("Contato lido - nome: " + c.nome + " telefone: " + c.telefone);
          console.log("Contato lido - nome: " + c.nome + " telefone: " + c.telefone);
        }})
        .catch(( err : any)=>{
          console.log("Erro ao executar a leitura: " + err);
          Alert.alert("Erro ao executar a leitura: " + err);
        })
      }}/>  
    </View>
  )
}

