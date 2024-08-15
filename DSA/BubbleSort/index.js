let array = [12,86,6,74,100,459,74,65,91,58,14];

for(let i = 0; i<array.length;i++){
    for(let j =0;j<array.length;j++){
        if(array[j]>array[j+1]){
            let temp = array[j];
            array[j]=array[j+1];
            array[j+1]=temp
        }
    }
}
console.log(array);
