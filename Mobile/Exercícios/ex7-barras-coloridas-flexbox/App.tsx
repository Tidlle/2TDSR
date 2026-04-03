import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{marginTop: 50, alignSelf: "center", height: 230, borderLeftWidth:  5, borderRightWidth: 5}}>
      <View style={estilos.containerCima}>
        <View style={[estilos.coresCima, {backgroundColor: 'white'}]}></View>
        <View style={[estilos.coresCima, {backgroundColor: 'yellow'}]}></View>
        <View style={[estilos.coresCima, {backgroundColor: 'cyan'}]}></View>
        <View style={[estilos.coresCima, {backgroundColor: 'green'}]}></View>
        <View style={[estilos.coresCima, {backgroundColor: 'purple'}]}></View>
        <View style={[estilos.coresCima, {backgroundColor: 'red'}]}></View>
        <View style={[estilos.coresCima, {backgroundColor: 'blue'}]}></View>
        <StatusBar style="auto" />
      </View>
      <View style={estilos.containerBaixo}>
        <View style={[estilos.coresBaixo, {backgroundColor: 'darkblue'}]}></View>
        <View style={[estilos.coresBaixo, {backgroundColor: 'white'}]}></View>
        <View style={[estilos.coresBaixo, {backgroundColor: 'purple'}]}></View>
        <View style={[estilos.coresBaixo, {backgroundColor: 'black', width: 170}]}></View>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  containerCima: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row",
    margin: 0
  },
  coresCima: {
    width: 50,
    height: 180,
  },
  containerBaixo: {
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: "row",
    margin: 0
  },
  coresBaixo: {
    width: 60,
    height: 50,
  },
});

