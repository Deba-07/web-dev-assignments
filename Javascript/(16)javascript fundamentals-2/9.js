function uniqueCharacterCheck(inputString){
    charSet = new Set();
    for(const char of inputString){
        if(charSet.has(char)){
            console.log("This input string contains duplicates.");
            return false;
        }
        charSet.add(char);
    }
    console.log("This input string contains only unique characters.");
    return true;
}
uniqueCharacterCheck("mithun")
uniqueCharacterCheck("anurag")