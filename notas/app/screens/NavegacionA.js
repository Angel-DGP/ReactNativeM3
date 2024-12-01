import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';

export const NavegacionA =() =>{
  return (
    <View style={styles.container}>
      <Text>Hola, Navegacion A
      </Text>
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
