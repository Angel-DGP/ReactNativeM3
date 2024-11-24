import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput,Button } from "react-native";

export default function App() {
  const [nombre, setNombre] = useState();
  const [apellido, setApellido] = useState();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ejemplo Margin and Padding</Text>
      <TextInput
        value={nombre}
        onChangeText={setNombre}
        placeholder="Ingrese su nombre"
        style={styles.box}
      />
      <TextInput
        value={apellido}
        onChangeText={setApellido}
        placeholder="Ingrese su apellido"
        style={styles.box}
      />
      <Button title='OK' onPress={()=>{
      }}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  box: {
    borderColor: "#d5d8dc",
    borderWidth: 2,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginVertical: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center'
  }
});
