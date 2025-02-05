/*
Description: Method to search a particular element in an Array
Parameter: Array of Integer, number
return: number
*/
function searchMyElement(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == element) {
            return i;
        }
    }
    return null;
}
let intArray = [23, 12, 9, 56, 78, 45, 17];
if (searchMyElement(intArray, 56) != null) {
    console.log("" + searchMyElement(intArray, 56));
} else {
    console.log("Element was not Found!😞");
}