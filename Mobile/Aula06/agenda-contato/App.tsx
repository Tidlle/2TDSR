import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Pressable, TouchableHighlight } from 'react-native';

export default function App() {
  //let stateContador = useState<number>(0);
  //const contador = stateContador[0];
  //const setContador = stateContador[1];
  /*
    stateContador é um array de 2 posições, 
    onde a posição 0 é o valor do contador e a posição 1 
    é a função para atualizar o valor do contador.
          0                           1
    [valor do contador,   função para atualizar o valor do contador]
  */
  const [a, b, c] = [ 6, 7, 8 ]; // Desestruturação

  const [contador, setContador] = useState<number>(0);

  return (
    <View style={estilos.containerPrincipal}>
      <Text style={estilos.titulo}>Contador</Text>
      <View style={estilos.containerLinha}>
        <TouchableHighlight onPress={()=>{
          setContador(contador + 1);
          console.log("Incrementar pressionado" + contador)
          }}>
          <View style={estilos.button}>
            <Text style={estilos.buttonText}>Incrementar</Text>
          </View>
        </TouchableHighlight>
        <Text style={estilos.numero}>{contador}</Text>
        <TouchableHighlight onPress={()=>{
          setContador(contador - 1);
          console.log("Decrementar pressionado" + contador)
          }}>
          <View style={estilos.button}>
            <Text style={estilos.buttonText}>Decrementar</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLinha: {
    flexDirection: 'row',
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  box: {
    width: 100,
    height: 100,
  },
  titulo: {
    color: 'blue',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'navy',
    margin: 10,
    padding: 5,
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    padding: 10
  },
  numero: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black'
  }
});
