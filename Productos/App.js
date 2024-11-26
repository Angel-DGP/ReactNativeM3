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
  let save = () => {
    if (
      codigo == null || codigo == '' ||
      categoria == null || categoria == '' ||
      precioCompra == NaN || precioCompra == '' ||
      nombre == null || nombre == '' ||
      precioCompra == NaN || precioCompra == '' 
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
          
        }
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
          <Button
            title="E"
            color="green"
            onPress={() => {
              isNew = false;
              indexN = props.index;
              setCodigo(props.producto.id.toString());
              setNombre(props.producto.nombre);
              setCategoria(props.producto.categoria);
              setPrecioCompra(props.producto.precioCompra.toString());
              setPrecioVenta(props.producto.precioVenta.toString());
            }}
          />
          <Button
            title="X"
            color="red"
            onPress={() => {
              indexN = props.index;
              productos.splice(indexN, 1);
              setNumClicks(numClicks + 1);
            }}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
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
        keyExtractor={(item) => {
          return item.id;
        }}
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
    flex: 8,
    borderWidth: 0,
    paddingHorizontal: 4,
  },
  itemRight: {
    flex: 2,
    borderColor: "black",
    borderWidth: 0,
    paddingHorizontal: 8,
    flexDirection: "row",
    justifyContent: "space-between",
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
});
