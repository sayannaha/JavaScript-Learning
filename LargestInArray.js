/*
Description: Method to find the Largest Number in an Array
Parameter: Array
return: number
*/
function largestInMyArray(arr) {
    let largest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (largest < arr[i]) {
            largest = arr[i];
        }
    }
    return largest;
}
let intArray = [23, 12, 9, 56, 78, 45, 17];
console.log("" + largestInMyArray(intArray));