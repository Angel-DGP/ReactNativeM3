import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Button style={styles.button} title="X"></Button>
        <Button style={styles.button} title="Y"></Button>
        <Button style={styles.button} title="Z"></Button>
      </View>
      <View style={styles.container2}>
        <View style={styles.container2_1}>
          <View style={styles.container2_1_1}>
            <Button style={styles.button} title="BOTON 1" />
            <Button style={styles.button} title="BOTON 2" />
          </View>
          <View style={styles.container2_1_2}>
            <Button title="OPERACION 1"/>
            <Button title="OPERACION 2"/>
            <Button title="OPERACION 2"/>
          </View>
        </View>
        <View style={styles.container2_2}>
          <Button title="ACCION 1"/>
          <Button title="ACCION 2"/>
        </View>
      </View>
      <View style={styles.container3}>
        <Button title="BOTON FINAL"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 50,
    paddingHorizontal: 10,
  },
  container1: {
    flex: 1,
    backgroundColor: "cyan",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  container2: {
    flex: 6,
    backgroundColor: "green",
    flexDirection: "column",
    padding: 10,
  },
  container3: {
    flex: 1,
    backgroundColor: "orange",
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  container2_1: {
    flex: 4,
    backgroundColor: "pink",
    flexDirection: "row",
  },
  container2_2: {
    flex: 1,
    backgroundColor: "blue",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  container2_1_1: {
    flex: 1,
    backgroundColor: "yellow",
    justifyContent: 'space-around',
    alignItems: 'stretch'
  },
  container2_1_2: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
});
