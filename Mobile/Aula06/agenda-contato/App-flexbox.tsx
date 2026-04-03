import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={estilos.container}>
      <View style={[estilos.box, {backgroundColor: 'blue'}]}/>
      <View style={[estilos.box, {backgroundColor: 'red'}]}/>
      <View style={[estilos.box, {backgroundColor: 'green'}]}/>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 100,
    height: 100,
  }
});
