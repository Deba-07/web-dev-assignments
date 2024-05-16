const person = {
    firstname: 'Debasis',
    lastname: 'Das',
    age: 21,
}
function ageInDays(personObject, callback){
    const fullName = `${personObject.firstname} ${personObject.lastname}`;
    const ageInDays = personObject.age * 365;
    callback(fullName, ageInDays);
}
function result(fullName, ageInDays){
    console.log(`The person's full name is ${fullName} and age in days is ${ageInDays}`);
}
ageInDays(person, result);