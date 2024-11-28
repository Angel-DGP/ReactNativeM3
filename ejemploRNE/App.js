import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { Button } from '@rneui/themed';
import { Input } from '@rneui/themed';
import { useState } from 'react';

export default function App() {
  const [name,setName] = useState();
  return (
    <View style={styles.container}>
      <Text>RNE</Text>
      <Input placeholder='Ingrese su nombre'
      value={name}
      onChangeText={setName}
      />
      <Button 
        title="Mostrar"
        icon={{
          name: 'layers',
          type: 'feather',
          size: 15,
          color: 'white',
        }}
        onPress={()=>{
          Alert.alert("Info","Su nombre es: " + name)
        }}
      />
      <Button
              title="HOME"
              icon={{
                name: 'home',
                type: 'feather',
                size: 20,
                color: 'white',
              }}
              />
              
              
      <StatusBar style="auto" />
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
