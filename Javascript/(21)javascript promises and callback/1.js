const originalArray = [1, 2, 3, 4, 5];
function callback(num){
    return num * 2;
}
function doubleArray(arr, callback){
    const doubledArray = arr.map((num) =>{
        return callback(num);
    });
    return doubledArray;
}
const doubledArray = doubleArray(originalArray, callback);
console.log(doubledArray);