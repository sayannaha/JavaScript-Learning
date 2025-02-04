/*
Description: Method to Sort My Array
Parameter: Array of Integer
return: Array of Integer
*/
function sortMyArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
let intArray = [23, 12, 9, 56, 78, 45, 17];
console.log("" + sortMyArray(intArray));
