let arr1 = [12, 2, 5, 7, 1, 6, 7, 5, 1, 46, 155, 30];
let arr2 = [10, 2, 51, 52, 46, 11]
let arr3 = [];

let a1 = 0, a2 = 0, a3 = 0;

while (a1 < arr1.length && a2 < arr2.length) {
    if (arr1[a1] < arr2[a2]) {
        arr3[a3] = arr1[a1];
        a1++;
    } else {
        arr3[a3] = arr2[a2];
        a2++;
    }
    a3++;
}
let s =arr3.sort((a,b)=>a-b)
console.log(s);
