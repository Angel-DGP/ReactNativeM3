import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container2}></View>
      <View style={styles.container3}>
        <View style={styles.container3_1}></View>
        <View style={styles.container3_2}>
        <View style={styles.container3_2_1}></View>
        <View style={styles.container3_2_2}>
          <Button  title='boton 1'/>
          <Button  title='boton 2'/>
          <Button  title='boton 3'/>
        </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column'
  },
  container2: {
    flex: 1,
    backgroundColor: 'blue',
  },container3: {
    padding: 15,
    flex: 3,
    backgroundColor: 'green'
  },container3_1:{
    flex: 1,
    backgroundColor: 'yellow'
  },container3_2:{
    flex: 1,
    backgroundColor: 'orange',
    flexDirection: 'row',
  },container3_2_1:{
    flex: 1,
    backgroundColor: 'pink'
  },container3_2_2:{
    flex: 2,
    backgroundColor: 'purple',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
  
});
