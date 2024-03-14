const allUsers = ['Mithun', 'Sahil' ,'Subham', 'Akash',  'Suman']

function isUserPresent(users){
    if(allUsers.includes(users)){
        console.log(`Yes, ${users} is present`);
    }
    else{
        console.log(`No, ${users} is not a valid user`);
    }
}
isUserPresent('Mithun');
isUserPresent('someone');