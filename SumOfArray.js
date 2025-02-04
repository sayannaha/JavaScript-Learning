/*
Description: Method to find the Sum of all the elements of an Array
Parameter: Array
return: number
*/
function sumOfElementsOfMyArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
let intArray = [23, 12, 9, 56, 78, 45, 17];
console.log("" + sumOfElementsOfMyArray(intArray));