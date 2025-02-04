/*
Description: Method to find the Index of a particular element in an Array
Parameter: Array of Integer, Number
return: Number
*/
function indexOfElements(arr, number) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == number) {
            return i;
        }
    }
    return null;
}
let intArray = [23, 12, 9, 56, 78, 45, 17];
console.log("" + indexOfElements(intArray, 78));