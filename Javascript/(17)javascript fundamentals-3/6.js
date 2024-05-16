const mainString = "Hello"
function reverseString(input){
    return input.split("").reverse().join("")
}
const reversedString = reverseString(mainString)
console.log(reversedString)