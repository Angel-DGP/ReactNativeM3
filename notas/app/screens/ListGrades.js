import { StatusBar } from "expo-status-bar";
import { FlatList } from "react-native";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { getGrades } from "../services/GradeServices";
import { FAB, ListItem, Avatar } from "@rneui/base";
import { useState } from "react";

export const ListGrades = ({ navigation }) => {
  const [time,setTime]=useState()
  const refreshList=()=>{
    setTime(new Date().getTime())
  }
  const ItemGrade = ({ nota }) => {
    return (
      <TouchableHighlight
        onPress={() => {
          navigation.navigate("GradesFormNav", { notita: nota, fnRefresh:refreshList });
        }}
      >
        <ListItem bottomDivider>
          <Avatar
            title={nota.subject.substring(0, 1)}
            containerStyle={{ backgroundColor: "green" }}
            rounded
          />
          <ListItem.Content>
            <ListItem.Title>{nota.subject}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Content>
            <ListItem.Subtitle>{nota.grade}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </TouchableHighlight>
    );
  };
  return (
    <View style={styles.container}>
      <Text>LISTA DE NOTAS</Text>
      <FlatList
        data={getGrades()}
        renderItem={({ item }) => {
          return <ItemGrade nota={item} />;
        }}
        keyExtractor={(item) => {
          return item.subject;
        }}
        extraData={time}
      />
      <FAB
        title="+"
        placement="right"
        onPress={() => {
          navigation.navigate("GradesFormNav",{notita:null,fnRefresh:refreshList});
        }}
      />

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: "5%",
  },
});
