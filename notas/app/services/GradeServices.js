let grades = [
  { subject: "Matematicas", grade: 9.5 },
  { subject: "Educación Fisica", grade: 10 },
];
export const saveGrades = (grade) => {
  grades.push(grade);
  console.log("Arreglo", grades);
};
export const getGrades = () => {
  return grades;
}; 
export const updateGrade = (nota) => {
    for(let i = 0;i <grades.length;i++){
        if(grades[i].subject==nota.subject){
            console.log("entro aqui")
            grades[i] = nota
            console.log(grades)
        }
    }

};
