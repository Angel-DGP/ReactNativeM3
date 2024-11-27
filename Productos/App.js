import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Alert,
  TouchableOpacity,
  Modal,
} from "react-native";
let productos = [
  {
    id: 101,
    nombre: "Manzana",
    categoria: "Frutas",
    precioCompra: 0.5,
    precioVenta: 1.0,
  },
  {
    id: 102,
    nombre: "Pan",
    categoria: "Panadería",
    precioCompra: 0.3,
    precioVenta: 0.8,
  },
  {
    id: 103,
    nombre: "Leche",
    categoria: "Lácteos",
    precioCompra: 0.9,
    precioVenta: 1.5,
  },
  {
    id: 104,
    nombre: "Arroz",
    categoria: "Granos",
    precioCompra: 1.2,
    precioVenta: 2.0,
  },
  {
    id: 105,
    nombre: "Queso",
    categoria: "Lácteos",
    precioCompra: 2.5,
    precioVenta: 4.0,
  },
];
let indexN = -1;
let isNew = true;
export default function App() {
  const [codigo, setCodigo] = useState();
  const [nombre, setNombre] = useState();
  const [categoria, setCategoria] = useState();
  const [precioCompra, setPrecioCompra] = useState();
  const [precioVenta, setPrecioVenta] = useState("PRECIO DE VENTA");
  const [numClicks, setNumClicks] = useState(0);
  const [modal, setModalVisible] = useState(true); //Tengo que cambiarlo a false
  let save = () => {
    if (
      codigo == null ||
      codigo == "" ||
      categoria == null ||
      categoria == "" ||
      precioCompra == NaN ||
      precioCompra == "" ||
      nombre == null ||
      nombre == "" ||
      precioCompra == NaN ||
      precioCompra == ""
    ) {
      Alert.alert("INFO", "Todos los campos son obligatorios");
    } else {
      if (isNew == true) {
        let producto = {
          id: codigo,
          nombre: nombre,
          categoria: categoria,
          precioCompra: parseFloat(precioCompra),
          precioVenta: parseFloat(precioVenta),
        };
        if (find(codigo) == null) {
          productos.push(producto);
          limpiar();
        } else {
          Alert.alert("INFO", "Ya existe un producto con ese codigo");
        }
      } else {
        productos[indexN].nombre = nombre;
        productos[indexN].categoria = categoria;
        productos[indexN].precioCompra = parseFloat(precioCompra);
        productos[indexN].precioVenta = parseFloat(precioVenta);
        limpiar();
        isNew = true;
      }
    }
    setNumClicks(numClicks + 1);
  };
  let limpiar = () => {
    setCodigo(null);
    setNombre(null);
    setCategoria(null);
    setPrecioCompra(null);
    setPrecioVenta("PRECIO DE VENTA");
  };
  let find = (cod) => {
    let find = null;
    for (let i = 0; i < productos.length; i++) {
      if (productos[i].id == cod) {
        find = productos[i];
      }
    }
    return find;
  };
  let ItemProducto = (props) => {
    return (
      <View style={styles.listItem}>
        <View style={styles.itemLeft}>
          <Text style={styles.listTitle}>{props.producto.id}</Text>
        </View>
        <View style={styles.itemMiddle}>
          <View style={styles.itemHeader}>
            <Text style={styles.listTitle}>{props.producto.nombre}</Text>
            <Text style={styles.listCat}> ({props.producto.categoria})</Text>
          </View>
          <Text style={styles.listPrice}>USD {props.producto.precioVenta}</Text>
        </View>

        <View style={styles.itemRight}>
          <TouchableOpacity
            onPress={() => {
              isNew = false;
              indexN = props.index;
              setCodigo(props.producto.id.toString());
              setNombre(props.producto.nombre);
              setCategoria(props.producto.categoria);
              setPrecioCompra(props.producto.precioCompra.toString());
              setPrecioVenta(props.producto.precioVenta.toString());
            }}
            activeOpacity={0.1}
          >
            <Text style={styles.textButton}>E</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(!modal);
              indexN = props.index;
            }}
            activeOpacity={0.1}
          >
            <Text style={styles.textButtonR}>X</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Modal animationType="fade" transparent={true} visible={modal}>
        <View style={styles.centeredView}>
          <View style={styles.viewModal}>
            <View style={styles.modalMain}>
              <View style={styles.upModal}>
                <Text style={styles.textModal}>
                  ¿Estas seguro que deseas eliminar este producto?
                </Text>
              </View>
              <View style={styles.bottomModal}>
                <Button
                  title="Cancelar"
                  onPress={() => {
                    setModalVisible(!modal);
                  }}
                />
                <Button
                  title="Si, eliminar"
                  onPress={() => {
                    productos.splice(indexN, 1);
                    setNumClicks(numClicks + 1);
                    setModalVisible(!modal);
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <Text style={styles.title}>Productos</Text>
      <View style={styles.containerInputs}>
        <TextInput
          value={codigo}
          onChangeText={setCodigo}
          style={styles.textInput}
          placeholder="CODIGO"
          keyboardType="numeric"
          editable={isNew}
        />
        <TextInput
          value={nombre}
          onChangeText={setNombre}
          style={styles.textInput}
          placeholder="NOMBRE"
        />
        <TextInput
          value={categoria}
          onChangeText={setCategoria}
          style={styles.textInput}
          placeholder="CATEGORIA"
        />
        <TextInput
          value={precioCompra}
          onChangeText={(txt) => {
            setPrecioCompra(txt);
            let valorPrecioVenta =
              parseFloat(txt) + (parseFloat(txt) * 20) / 100;
            setPrecioVenta(valorPrecioVenta.toFixed(2));
            if (valorPrecioVenta == NaN || isNaN(valorPrecioVenta) == true) {
              setPrecioVenta("PRECIO DE VENTA");
            }
          }}
          style={styles.textInput}
          placeholder="PRECIO DE COMPRA"
          keyboardType="decimal-pad"
        />
        <TextInput
          style={styles.textInput}
          placeholder={precioVenta}
          keyboardType="decimal-pad"
          editable={false}
        />
      </View>
      <View style={styles.containerButton}>
        <Button
          title="Nuevo"
          onPress={() => {
            isNew = true;
            limpiar();
          }}
        />
        <Button title="Guardar" onPress={save} />
        <Text style={styles.textContador}> Productos: {productos.length}</Text>
      </View>
      <FlatList
        data={productos}
        renderItem={(obj) => {
          return <ItemProducto producto={obj.item} index={obj.index} />;
        }}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 60,
    paddingHorizontal: 25,
  },
  list: {
    paddingHorizontal: 4,
    paddingVertical: 4,
  },
  title: {
    fontSize: 34,
    textAlign: "center",
    fontWeight: "bold",
    paddingVertical: 5,
  },
  listItem: {
    flex: 10,
    borderColor: "#bfc9ca",
    borderWidth: 2,
    paddingHorizontal: 8,
    marginVertical: 2,
    paddingBottom: 5,
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
  },
  listTitle: {
    fontSize: 18,
    paddingVertical: 4,
  },
  listPrice: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  listCat: {
    fontStyle: "italic",
    fontWeight: "300",
    paddingHorizontal: 2,
  },
  itemLeft: {
    flex: 1,
    borderColor: "black",
    borderWidth: 0,
    paddingHorizontal: 8,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingRight: 10,
  },
  itemMiddle: {
    flex: 7,
    borderWidth: 0,
  },
  itemRight: {
    flex: 3,
    borderColor: "black",
    borderWidth: 0,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  textInput: {
    paddingVertical: 8,
    borderWidth: 2,
    marginVertical: 4,
    borderRadius: 10,
    paddingHorizontal: 8,
    borderColor: "gray",
  },
  containerButton: {
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  textContador: {
    fontWeight: "bold",
  },
  textButton: {
    color: "green",
    fontSize: 18,
    borderWidth: 0,
    paddingVertical: 5,
    paddingHorizontal: 12,
    paddingBottom: 8,
  },
  textButtonR: {
    color: "red",
    fontSize: 18,
    borderWidth: 0,
    paddingVertical: 5,
    paddingHorizontal: 12,
    paddingBottom: 8,
  },
  viewModal: {
    flex: 1,
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    paddingHorizontal: 18,
    justifyContent: "center",
    paddingTop: 25,
    paddingBottom: 0,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(28, 27, 23, 0.5)",
    paddingVertical: 385,
    borderWidth: 0
  },
  modalMain: {},
  upModal: {
    flex: 2,
  },
  bottomModal: {
    flex: 1,

    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 50,
    marginBottom: 10,
  },
  textModal: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    paddingTop: 6
  },
  buttonModal: {},
});
