import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ListGrades } from "./app/screens/ListGrades";
import { GradeForm } from "./app/screens/GradeForm";
import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavegacionA } from "./app/screens/NavegacionA";
import { NavegacionB } from "./app/screens/NavegacionB";
import { Icon } from "@rneui/base";
//@react-navigation/drawer
//react-native-reanimated
//react-native-safe-area-context@4.12.0
//react-native-gesture-handler@2.20.2

import { createDrawerNavigator } from "@react-navigation/drawer";

const Tab = createBottomTabNavigator();
const TabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Contenido A"
        component={NavegacionA}
        options={{
          headerShown: false,
          tabBarLabel: "Configuracion",
          tabBarIcon:({size,tintColor})=>{
            return <Icon name="settings" size={size} color={tintColor} type="ionicons"/>
          }
        }}
      />
      <Tab.Screen
        name="Contenido B"
        component={NavegacionB}
        options={{
          headerShown: false,
          tabBarLabel: "Configuracion",
          tabBarIcon:({size,tintColor})=>{
            return <Icon name="settings" size={size} color={tintColor} type="feather"/>
          }
        }}
      />
    </Tab.Navigator>
  );
};

const Drawer = createDrawerNavigator();
const DrawerNav = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="NotasNav"
        component={NotasNav}
        options={{
          title: "Lista Notas",
        }}
      />
      <Drawer.Screen
        name="Drawe Ejemplo Tabs"
        component={TabNav}
        options={{
          title: "Ejemplo Tabs",
        }}
      />
      <Drawer.Screen
        name="Drawer Finalizacion"
        component={NotasNav}
        options={{
          title: "Finalizar Sesion",
        }}
      />
    </Drawer.Navigator>
  );
};
const Stack = createNativeStackNavigator();
const NotasNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ListGradesNav" component={ListGrades} />
      <Stack.Screen name="GradesFormNav" component={GradeForm} />
    </Stack.Navigator>
  );
};
export default function App() {
  return (
    <NavigationContainer>
      <DrawerNav></DrawerNav>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
