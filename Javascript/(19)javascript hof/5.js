const urlPattern = /^(https?:\/\/)[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=%]+[.][a-zA-Z]+$/;
function isValidURL(input){
    return urlPattern.test(input);
}
const url = "https://google.com"
if(isValidURL){
    console.log(`"${url}" is a valid URL`);
}
else{
    console.log(`"${url}" is not a valid URL`);
}