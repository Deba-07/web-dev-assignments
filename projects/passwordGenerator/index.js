const passwordField = document.getElementById("password");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const lengthField = document.getElementById("length");
const includeUppercase = document.getElementById("uppercase");
const includeLowercase = document.getElementById("lowercase");
const includeNumbers = document.getElementById("numbers");
const includeSymbols = document.getElementById("symbols");

const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()_+[]{}|;:,.<>?";

generateBtn.addEventListener("click", generatePassword)
copyBtn.addEventListener("click", copyToClipboard)

function generatePassword(){
    let length = parseInt(lengthField.value)
    let characters=""
    if(includeUppercase.checked) characters += UPPERCASE
    if(includeLowercase.checked) characters += LOWERCASE
    if(includeNumbers.checked) characters += NUMBERS
    if(includeSymbols.checked) characters += SYMBOLS
    if(!characters){
        passwordField.value = "Select Options";
        return;
    }
    let password = "";
    for(let i = 0; i < length; i++){
        password += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    passwordField.value = password
}
async function copyToClipboard() {
    const password = passwordField.value;
  
    if (!password) {
      alert("Nothing to copy! Generate a password first.");
      return;
    }
  
    try {
      await navigator.clipboard.writeText(password);
      alert("Password copied to clipboard!");
    } catch (error) {
      alert("Failed to copy password: " + error);
    }
  }