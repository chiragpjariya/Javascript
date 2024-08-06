// Inserting Data in Array
//         <------------
// let a =[1,2,3,4,5,6]
// Start loop from end or Stop start
// :right To Left


let Array = [10,20,30,40,50,60,70,80,90]
let pos = 2;
let newEl = 10.10;

    console.log(Array);
    
    for(let i = Array.length-1;i>=0;i--){
        if(i>=pos){
         Array[i+1]=Array[i]
         if(i==pos){
            Array[i]=newEl
         }
        } 
       
    }


console.log(Array)