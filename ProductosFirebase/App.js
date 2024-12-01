import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import "react-native-gesture-handler"
//@react-navigation/drawer
//react-native-reanimated
//react-native-safe-area-context
//react-native-gesture-handler
import {createDrawerNavigator} from '@react-navigation/drawer'

const Drawer = createDrawerNavigator();
const drawerNav=()=>{
  return(
    <Drawer.Navigator>
      <Drawer.Screen />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
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
