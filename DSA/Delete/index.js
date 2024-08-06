// Delete elements from Array
// loop starting pointe are start and stop in ending


let arr = [10, 20, 30, 40, 50, 60]
let pos = 2;

// Without in build fucntion
// for (let i = 0; i <= arr.length - 1; i++) {
//     if (i >= pos) {
//         arr[i] = arr[i + 1]
//         if (i == arr.length - 1) {
//             arr.length = arr.length - 1
//         }
//     }
// }



for (let i = pos; i <= arr.length - 1; i++) {
    arr[i] = arr[i + 1]
    if (i == arr.length - 1) {
        arr.length = arr.length - 1
    }
}

// In build fucntion
// arr.splice(3,1)

console.log(arr);
