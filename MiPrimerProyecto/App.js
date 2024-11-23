import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';

export default function App() {
  const despedirse = () =>{
    Alert.alert("Es un adiosmundo refinado","cierto?");
  }
  return (
    <View style={styles.container}>
      <Text>Hola, Soy Didier Ángel Guaña 
      </Text>
      <StatusBar style="auto" />
      <Button title='Hasta la proxima masa Planetaria'
      onPress={despedirse}
      />
      <Button title='Saludos Masa Planetaria'
      onPress={()=>{
        Alert.alert("Es un hola mundo refinado","cierto?")
      }}
      />
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
});
