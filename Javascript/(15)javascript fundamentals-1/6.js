function validateUserInformation(name, email, age) {
    if (typeof name !== 'string') {
      console.log('Name should be a string.');
      return false;
    }
  
    if (typeof email !== 'string') {
      console.log('Email should be a string.');
      return false;
    }
  
    if (typeof age !== 'number') {
      console.log('Age should be a number.');
      return false;
    }
  
    return true;
  }
  
  // Example usage:
  let name = 'Mithun';
  let email = 'mithun.s@pw.live';
  let age = '21';
  
  if (validateUserInformation(name, email, age)) {
    console.log('All user information is valid.');
  } else {
    console.log('Please provide valid user information.');
  }
  