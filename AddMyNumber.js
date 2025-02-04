/*
Description: Method to add a particular elements in an Array
Parameter: Array of Integer, Number/ Array of Integer
return: Array of Integer
*/
function addMyElementInArray(arr, numbers) {
    arr.push(numbers);
    return arr;
}
let intArray = [23, 12, 9, 56, 78, 45, 17];
let inputArray = [2, 2, 9, 5, 7, 5, 7];
console.log("" + addMyElementInArray(intArray, inputArray));