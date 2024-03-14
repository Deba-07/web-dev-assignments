const exampleObject = {
    name: "Peter",
    age: 24,
    city: "Delhi",
    salary: 50000
}
function hasProperty(obj, propertyName){
    return obj.hasOwnProperty(propertyName)
}
console.log(hasProperty(exampleObject, "name"))
console.log(hasProperty(exampleObject, "email"))