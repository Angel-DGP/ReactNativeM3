import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [dolarState,setDolar] = useState('Ingrese la cantidad en dolar')
  const [pesoMState,setPesoM] = useState()
  const [pesoCState,setPesoC] = useState()
  const [euroState,setEuro] = useState()
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Convertidor</Text>
      <TextInput value={dolarState} style={styles.textInput} onChangeText={(txt)=>{
        setDolar(txt)
      }}></TextInput>
      <Button title='Convertir a Pesos Mexicanos' onPress={()=>{
        setPesoM(20.43 * dolarState)
      }}/>
      <Text style={styles.h2}>Valor en Pesos Mexicanos: {pesoMState}</Text>
      <Button title='Convertir a Pesos Colombianos' onPress={()=>{
        setPesoC(4389.23 * dolarState)
      }}/>
      <Text style={styles.h2}>Valor en Pesos Colombianos: {pesoCState}</Text>
      <Button title='Convertir a Euro' onPress={()=>{
        setEuro(0.96 * dolarState)
      }}></Button>
      <Text style={styles.h2}>Valor en Euros: {euroState}</Text>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    backgroundColor: "#eaecee",
    color: "#17202a",
    borderColor: "#d5d8dc",
    borderRadius: 20,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 5,
  },
  h1: {
    fontWeight: "bold",
    color: "#17202a",
    fontSize: 20,
    paddingVertical: 10,
  },
  h2: {
    fontWeight: "bold",
    color: "#17202a",
    fontSize: 15,
    paddingVertical: 10,
  },
});
