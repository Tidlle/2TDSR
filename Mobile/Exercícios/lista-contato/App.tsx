import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Switch } from 'react-native';


export default function App() {
  interface Contato{
    id: number;
    nome: string;
    telefone: string;
    email: string;
    info: string;
    foto: string;
    ativo: boolean;
    tipo: string;
  }
  return (
    <View>
      <Text style={styles.title}>Contato</Text>
      <TextInput style={styles.input} placeholder='Nome:'></TextInput>
      <TextInput style={styles.input} placeholder='Telefone:'></TextInput>
      <TextInput style={styles.input} placeholder='Email:'></TextInput>
      <TextInput style={styles.input} placeholder='Info:'></TextInput>
      <TextInput style={styles.input} placeholder='Foto:'></TextInput>
      <Switch value={false} thumbColor="red" trackColor={{false: "lightpink", true:"pink"}}></Switch>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 24},
  input: {backgroundColor: "lightblue", borderColor: "blue", borderWidth: 1, margin: 10, width: 300, height: 30, padding: 10},
});
