import { StatusBar } from "expo-status-bar";
import { act, useState,  } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Button,
  Alert,
} from "react-native";

let personas = [
  { nombre: "Thor", apellido: "Tillas", cedula: "0242342342" },
  { nombre: "Amber", apellido: "Flores", cedula: "172312313" },
  { nombre: "Peter", apellido: "Parker", cedula: "172312312" },
];
let isNew = true;
let actualIndex = -1;
export default function App() {
  const [txtNombre, setNombre] = useState();
  const [txtApellido, setApellido] = useState();
  const [txtCedula, setCedula] = useState();
  const [numElementos, setNumElementos] = useState(personas.length);
  let guardarPersona = () => {
    if (isNew == true) {
      if (existsPerson() == true) {
        Alert.alert(
          "Warning",
          "La persona ya existe con esa cedula " + txtCedula
        );
      } else {
        let person = {
          nombre: txtNombre,
          apellido: txtApellido,
          cedula: txtCedula,
        };
        personas.push(person);
      }
    } else {
      console.log("isNew is false");
      personas[actualIndex].nombre = txtNombre;
      personas[actualIndex].apellido = txtApellido;
    }
    isNew = true;
    console.log(personas);
    limpiar();
    setNumElementos(personas.length);
  };
  let limpiar = () => {
    setApellido(null);
    setCedula(null), setNombre(null);
  };
  let existsPerson = () => {
    for (let i = 0; i < personas.length; i++) {
      if (personas[i].cedula == txtCedula) {
        return true;
      }
    }
    return false;
  };
  let ItemPersona = (props) => {
    return (
      <View style={styles.itemPersona}>
        <View style={styles.itemLeft}>
          <Text style={styles.textPri}>{props.index}</Text>
        </View>
        <View style={styles.itemMiddle}>
          <View style={styles.itemNombres}>
            <Text style={styles.textNombre}>
              {props.persona.nombre} {props.persona.apellido}
            </Text>
          </View>
          <View>
            <Text style={styles.textSecu}>{props.persona.cedula}</Text>
          </View>
        </View>
        <View style={styles.itemRight}>
          <Button
            title=" E "
            color="green"
            onPress={() => {
              isNew = false;
              setCedula(props.persona.cedula);
              setNombre(props.persona.nombre);
              setApellido(props.persona.apellido);
              actualIndex = props.index;
            }}
          />
          <Button
            title=" X "
            color="red"
            onPress={() => {
              actualIndex = props.index;
              personas.splice(actualIndex, 1);
              setNumElementos(personas.length);
            }}
          />
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Proyecto Listas</Text>
      <View style={styles.inputs}>
        <TextInput
          style={styles.textInput}
          placeholder="Ingrese su cedula"
          value={txtCedula}
          keyboardType="numeric"
          onChangeText={setCedula}
          editable={isNew}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Ingrese su nombre"
          value={txtNombre}
          onChangeText={setNombre}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Ingrese su apellido"
          value={txtApellido}
          onChangeText={setApellido}
        />
      </View>
      <View style={styles.containerButtons}>
        <Button title="Guardar" onPress={guardarPersona} />
        <Button title="Limpiar" onPress={limpiar} />
      </View>
      <FlatList
        data={personas}
        renderItem={(obj) => {
          return <ItemPersona index={obj.index} persona={obj.item} />;
        }}
        keyExtractor={(item) => {
          return item.cedula;
        }}
        style={styles.lista}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    paddingVertical: 70,
    paddingHorizontal: 25,
  },
  lista: {},
  itemPersona: {
    flex: 10,
    flexDirection: "row",
    marginVertical: 5,
    borderWidth: 3,
    borderColor: "#ccd1d1",
    borderRadius: 10,
  },
  textPri: {
    fontSize: 20,
    fontWeight: "bold",
  },
  textSecu: {
    fontStyle: "italic",
    fontSize: 15,
    fontWeight: "300",
  },
  itemLeft: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    borderRightWidth: 3,
    borderColor: "#34495e",
    backgroundColor: "#f1c40f",
    borderStartStartRadius: 6,
    borderEndStartRadius: 6,
  },
  itemMiddle: {
    flex: 6,
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  itemRight: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
  },
  textNombre: {
    fontWeight: "600",
    fontSize: 18,
  },
  textInput: {
    borderColor: "#abb2b9",
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
    marginVertical: 5,
  },
  containerButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
