import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const {Navigator, Screen} = createStackNavigator();

const TelaA = ( props : any ) => {
  return (
    <View style={styles.container}>
      <Text>Tela A</Text>
      <Button title="Ir para Tela B" onPress={ () => props.navigation.navigate('TelaB') } />
    </View>
  );
}

const TelaB = ( props : any ) => {
  return (
    <View style={styles.container}>
      <Text>Tela B</Text>
      <Button title="Ir para Tela A" onPress={ () => props.navigation.navigate('TelaA') } />
    </View>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text>Navegação</Text>
        <Navigator>
          <Screen name="TelaA" component={TelaA} />
          <Screen name="TelaB" component={TelaB} />
        </Navigator>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
});
