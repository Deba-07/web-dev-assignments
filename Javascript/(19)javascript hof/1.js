let input = "PW Skills"
console.log(input);
function reverseString(inputString){
    return inputString.split("").reverse().join("");
}
function reverseStringWithDelay(inputString){
    setTimeout(function(){
        let reversed = reverseString(inputString);
        console.log("Rversed string:" + reversed);
    }, 2000)
}
reverseStringWithDelay(input);