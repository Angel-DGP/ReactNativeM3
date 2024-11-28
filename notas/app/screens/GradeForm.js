import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Input, Button } from "@rneui/base";
import { useState } from "react";
import { getGrades, saveGrades, updateGrade } from "../services/GradeServices";

export const GradeForm = ({ navigation, route }) => {
  let hasError = false;
  let isNew = true;
  let subjectR;
  let gradeR;
  if (route.params.notita != null) {
    isNew = false;
  }
  if (!isNew) {
    subjectR = route.params.notita.subject;
    gradeR = route.params.notita.grade;
  }
  const [subject, setSubject] = useState(subjectR);
  const [grade, setGrade] = useState(gradeR == null ? null : gradeR + "");
  const [errorSubject, setErrorSubject] = useState();
  const [errorGrade, setErrorGrade] = useState();

  const save = () => {
    setErrorGrade(null);
    setErrorSubject(null);
    validate();
    if (!hasError) {
      if (isNew) {
        saveGrades({ subject: subject, grade: parseFloat(grade) });
      } else {
        updateGrade({ subject: subject, grade: parseFloat(grade) });
      }
      console.log("Guarda");
      console.log(getGrades());
      navigation.goBack();
      route.params.fnRefresh();
    }
  };
  const validate = () => {
    if (subject == null || subject == "") {
      setErrorSubject("Ingrese una materia");
      hasError = true;
    }
    let gradeFloat = parseFloat(grade);
    if (
      gradeFloat == null ||
      isNaN(gradeFloat) == true ||
      gradeFloat > 10 ||
      gradeFloat < 0
    ) {
      setErrorGrade("Ingrese un una nota entre 1 y 10");
      hasError = true;
    }
    return hasError;
  };
  return (
    <View style={styles.container}>
      <Text>FORMULARIO DE NOTAS</Text>
      <Input
        value={subject}
        onChangeText={setSubject}
        placeholder="Ejemplo: Matemáticas"
        label="Materia"
        errorMessage={errorSubject}
        disabled={!isNew}
      />
      <Input
        value={grade}
        onChangeText={setGrade}
        placeholder="0-10"
        label="Nota"
        errorMessage={errorGrade}
        keyboardType="decimal-pad"
      />
      <Button
        title="Guardar"
        icon={{
          name: "save",
          type: "feather",
          color: "white",
          size: 18,
        }}
        buttonStyle={styles.buttonStyle}
        onPress={save}
      />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonStyle: {
    backgroundColor: "green",
  },
});
