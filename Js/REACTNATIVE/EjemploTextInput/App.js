import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [nombreEstado, setNombreEstado] = useState("Ingrese su nombre");
  const [apellido, setApellido] = useState("Ingrese su apellido");
  const [nombreCompleto,setNombreCompleto] = useState();
  return (
    <View style={styles.container}>
      <Text>Ejemplo TextInput</Text>
      <Text> Hola {nombreCompleto}
      </Text>
      <TextInput
        style={styles.cajaDeText}
        value={nombreEstado}
        onChangeText={(txt) => {
          setNombreEstado(txt);
        }}
      ></TextInput>
      <TextInput
        style={styles.cajaDeText}
        value={apellido}
        onChangeText={(txt) => {
          setApellido(txt);
        }}
      ></TextInput>
      <Button title="Saludar" onPress={
        ()=>{
          let completo = nombreEstado + "" + apellido
          setNombreCompleto(completo);
        }
      }/>
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
  cajaDeText: {
    borderColor: "#abb2b9",
    borderWidth: 1,
    padding: 5,
  },
});
