// Search In array
// Linear Search Algorithm  


// Q:find the item in array.
// Q:how much items in array and store it indexes.

let arr = [10, 20, 50, 30, 40, 50, 60, 70]
let find = 50;
let indexOrCount = {
    count: 0,
    indexes: []
}

for (let i = 0;i<arr.length-1;i++){
    if(arr[i]===find){
        indexOrCount.count+=1;
        indexOrCount.indexes.push(i)
    }
}

console.log(indexOrCount);

// In built function
// find item index in array by default function
// arr.indexOf(find) // index finder
// arr.includes(find) // item finder