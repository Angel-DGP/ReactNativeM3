import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Button title='Comp1' />
      <Button title='Comp2' color='green'/>
      <Button title='Comp3'/>
      <Button title='Comp4'/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    borderColor: 'red',
    marginVertical: 50,
    marginHorizontal:5,
    borderWidth: 4
  },
});
