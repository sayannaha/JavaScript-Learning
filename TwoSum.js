/*
Problem: Two Sum
Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to the target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
Description: Method to return indices of Elements which add upto "target"
Parameter: Array of Integer, Number
Return: Array of Integer
*/
function twoSumInMyArray(arr, target) {
    const numMap = {};
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        const complement = target - num;
        if (complement in numMap) {
            return [numMap[complement], i];
        }
        numMap[num] = i;
    }
}
let target = 10;
let arrayInput = [2, 5, 6, 8, 1];
console.log("Target: " + target + ", Indices: " + twoSumInMyArray(arrayInput, target));