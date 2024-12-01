import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';

export const NavegacionB =() =>{
  return (
    <View style={styles.container}>
      <Text>Hola, Navegacion B
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
