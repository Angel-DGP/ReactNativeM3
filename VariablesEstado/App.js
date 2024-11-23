import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View,Alert } from 'react-native';
import {useState} from 'react'
export default function App() {
  const [contadorEstado,setContadorEstado] = useState(0);
  const [vidaEstado,setVidaEstado] = useState(5);
  const incrementar = () =>{
    setContadorEstado(contadorEstado+1);
    console.log("contador Estado>>>>>>" + contadorEstado);
  }
  const decrementar = () =>{
    setContadorEstado(contadorEstado-1);
    console.log("contador Estado>>>>>>" + contadorEstado)
  }
  const restarVida = () =>{
    if(vidaEstado!=0){
      setVidaEstado(vidaEstado-1)
      console.log("VIDAS>>>>>> " + vidaEstado);
    }
    else{
      Alert.alert("ADVERTENCIA","GAME OVER")
    }
  }
  const premiar = () =>{
    setVidaEstado(vidaEstado+3);
    console.log("VIDAS>>>>>> " + vidaEstado);
  }
  return (
    <View style={styles.container}>
      <Text>Variables de Estado</Text>
      <Text>Contador Estado {contadorEstado}</Text>
      <Button title='Sumar puntos' onPress={incrementar}/>
      <Button title='Restar puntos' onPress={decrementar}/>
      <Text>Vidas {vidaEstado}</Text>
      <Button title='Perder vida' onPress={restarVida}/>
      <Button title='Premiar' onPress={premiar}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
