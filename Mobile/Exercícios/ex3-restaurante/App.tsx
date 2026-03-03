import { StatusBar } from 'expo-status-bar';
import { Button, useWindowDimensions, Image, StyleSheet, Text, View, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const dimensions = useWindowDimensions();
  const width = dimensions.width
  const height = dimensions.height
  return (
    <View style={{}}>
      <View style={{backgroundColor: "white", alignItems: "center"}}>
        <View style={{backgroundColor: "cornflowerblue", borderBottomLeftRadius: 20, borderBottomRightRadius: 20, width: "100%"}}>
          <Text style={estilos.title}>Restaurante</Text>
        </View>
      </View>
      <LinearGradient colors={["lightgray", "lightskyblue"]}
        start={{x:0, y:0}}
        end={{x:1, y:0}}
        style={{backgroundColor: "navy", width: width, height: height}}>
          <View style={[estilos.containerField, {width: width}]}>
            <Text style={estilos.label}>Nome Estabelecimento</Text>
            <TextInput style={estilos.input}/>
          </View>
          <View style={[estilos.containerField, {width: width}]}>
            <Text style={estilos.label}>Tipo de comida</Text>
            <TextInput style={estilos.input}/>
          </View>
          <View style={[estilos.containerField, {width: width}]}>
            <Text style={estilos.label}>Nivel de preço</Text>
            <TextInput style={estilos.input}/>
          </View>
          <View style={[estilos.containerField, {width: width}]}>
            <Text style={estilos.label}>Satisfação geral</Text>
            <TextInput style={estilos.input}/>
          </View>
          <View style={[estilos.containerField, {width: width}]}>
            <Text style={estilos.label}>Endereço</Text>
            <TextInput style={estilos.input}/>
          </View>
          <View style={{flexDirection: "row", flex: 1, marginTop: 20, alignItems: "flex-start", justifyContent: "space-around"}}>
            <Button title="Gravar"/>
            <Button title="Pesquisar"/>
          </View>             
      </LinearGradient>
      <StatusBar style="auto" />
    </View>
  );
}


const estilos = StyleSheet.create({
  title: {fontSize: 72, color: "white", alignSelf: "center"},
  label : {fontSize: 32, color: "lightyellow", fontWeight: "bold", marginTop: 10, marginLeft: 15, marginBottom: 10},
  input : {backgroundColor: "white",  borderColor: "blue", 
          borderRadius: 15, borderWidth: 2, marginBottom : 10,
          marginLeft: 10, width: 430, height: 50},
  containerField : {flexDirection: "column"}
}); 