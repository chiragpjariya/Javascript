let array = [10, 49, 1, 3, 6, 7, 9, 110, 17, 22, 66];

function sortingArray(arr) {
    let ary = [...arr]
    let newArray = [] //return the sorted array
    let minVal;
    let binArray = [];



    ary.forEach((i) => {
        minVal = Math.min(...ary)
        if(i==minVal){
            binArray.push(i)
        }
    })
    console.log(binArray);
    

}

sortingArray(array)