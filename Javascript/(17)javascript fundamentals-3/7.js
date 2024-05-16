const userMap = new Map();
function addUser(name, age, email){
    const userinfo = {age, email};
    userMap.set(name, userinfo)
}

function updateUser(name, age, email){
    if(userMap.has(name)){
        const userinfo = userMap.get(name)
        userinfo.age = age;
        userinfo.email = email;
    }
    else{
        console.log(`user ${name} is not found.`)
    }
}
 
function deleteUser(name){
     if(userMap.has(name)){
        userMap.delete(name)
     }
     else{
        console.log(`user ${name} is not found`)
     }
}
addUser("Peter", 30, "peter@gmail.com")
addUser("Alex", 25, "alex@gmail.com")
console.log(userMap)

updateUser("peter", 26, "peter@gmail.com");
console.log(userMap);

deleteUser("alex");
console.log(userMap);