import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [valor1, setValor1] = useState("Ingrese el primer valor");
  const [valor2, setValor2] = useState("Ingrese el segundo valor");
  const [sumaState, setSuma] = useState(0);
  const [restaState, setresta] = useState(0);
  const [MultiState, setMulti] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Calculadora</Text>
      <TextInput
        style={styles.textInput}
        value={valor1}
        onChangeText={(txt) => {
          setValor1(txt);
        }}
      ></TextInput>
      <TextInput
        style={styles.textInput}
        value={valor2}
        onChangeText={(txt) => {
          setValor2(txt);
        }}
      ></TextInput>
      <Button title="Sumar" onPress={()=>{
        let suma = parseFloat(valor1) + parseFloat(valor2)
        setSuma(suma)
      }}/>
      <Text style={styles.h2}>Suma: {sumaState}</Text>
      <Text>---------------------------</Text>
      <Button title="Restar"
      onPress={()=>{
        let resta = parseFloat(valor1) - parseFloat(valor2)
        setresta(resta)
      }}/>
      <Text style={styles.h2}>Resta: {restaState}</Text>
      <Text>---------------------------</Text>
      <Button title="Multiplicar" onPress={()=>{
        let multi = parseFloat(valor1) * parseFloat(valor2)
        setMulti(multi)
      }}/>
      <Text style={styles.h2}>Multiplicación: {MultiState}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
