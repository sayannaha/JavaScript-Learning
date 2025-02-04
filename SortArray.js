function sortMyArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = aar[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}