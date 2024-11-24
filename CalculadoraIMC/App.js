import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';

export default function App() {
  const [peso,setPeso] = useState()
  const [estatura,setEstatura] = useState()
  const [imc,setImc] = useState()
  const [resultado,setResultado] = useState()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora IMC (Indice de masa corporal)</Text>
      <View style={styles.container_inputs}>
        <TextInput 
        style={styles.inputs}
          value={peso}
          onChangeText={setPeso}
          placeholder='Ingresa el peso en kilogramos'
        />
        <TextInput 
        style={styles.inputs}
          value={estatura}
          onChangeText={setEstatura}
          placeholder='Ingresa su estatura en centimetros'
        />
      </View>
      <View>
        <Button title='Calcular IMC'
        onPress={()=>{
          let imcCalculado = parseFloat(peso) / ((parseFloat(estatura)/100) * (parseFloat(estatura)/100))
          setImc(imcCalculado)
          console.log(imc)
          if(imcCalculado<18.5){
            setResultado('Su IMC es ' + imcCalculado.toFixed(2) + ', por lo tanto \n usted tiene un peso inferior al normal')}
          else if(imcCalculado>18.5 && imcCalculado<24.9){
            setResultado('Su IMC es ' + imcCalculado.toFixed(2) + ', por lo tanto \n usted tiene un peso normal')}
          else if(imcCalculado>25.0 && imcCalculado<=30){
            setResultado('Su IMC es ' + imcCalculado.toFixed(2) + ', por lo tanto \n usted tiene un peso superior normal')}
          else if(imcCalculado>30){
            setResultado('Su IMC es ' + imcCalculado.toFixed(2) + ', por lo tanto \n usted tiene un peso considerado obesidad')
          }
        }}/>
      </View>
      <View>
        <Text style={styles.text}>
          {resultado}
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#283747',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    color: '#ecf0f1',
    fontSize: '18',
    fontWeight: 'bold'
  },
  container_inputs:{
    flexDirection: 'column',
    marginVertical: 20,
  },
  inputs:{
    color: '#212f3d',
    backgroundColor: '#f2f3f4',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    borderColor: '#aeb6bf',
    borderWidth: 2,
    marginVertical: 6,
    textAlign: 'center'
  },text:{
    color: 'white',
    textAlign: 'center'
  }
});
