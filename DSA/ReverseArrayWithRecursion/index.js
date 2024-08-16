let array = [10, 85, 66, 46, 64, 47, 855, 73];

function revs(arr, start, end) {
    if (start <= end) {
        console.info(array)
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp

        revs(arr, start + 1, end - 1)
    } 
        
}

revs(array, 0, array.length - 1)
// console.log(array);



