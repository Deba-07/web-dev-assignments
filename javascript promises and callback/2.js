function manipulateString(inputString, callback){
    const manipulatedString = inputString.toUpperCase();
    callback(manipulatedString);
}
function originalString(manipulatedString){
    console.log(`The manipulated string is: ${manipulatedString}`);
}
manipulateString("hello world", originalString);