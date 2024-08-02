
// descripter
let obj = {
    name:"chirag",
    age:20,
    college:"Sarvodaya"
}


Object.defineProperty(obj,'name',{
    writable:false
})

obj.name = "cj"
console.log(obj.name);
