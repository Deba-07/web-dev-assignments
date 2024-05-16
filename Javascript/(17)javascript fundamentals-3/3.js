const exampleObject = {
    name: "Peter",
    age: 24,
    city: "Delhi",
    salary: 50000
}
function countProperties(obj){
    return Object.keys(obj).length
}
console.log(countProperties(exampleObject))