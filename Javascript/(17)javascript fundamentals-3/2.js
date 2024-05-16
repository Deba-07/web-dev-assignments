const student = {
    name: "Jhon",
    age: 21,
    grade: "B"
}
console.log(student)
function updateGrade(newGrade){
    student.grade = newGrade
}
updateGrade("A");
console.log(student)