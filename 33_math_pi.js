


// console.log(Math.PI);
// Math.PI= 5;
// console.log(Math.PI);


const descripter = Object.getOwnPropertyDescriptor(Math,"PI")

//console.log(descripter);

const chay = {
    name : "marwadi cahy",
    price :250,
      isAvailable :true
}

console.log(Object.getOwnPropertyDescriptor(chay,"name"));

 Object.defineProperty(chay,"name",{
    writable:false,
    enumerable:false
 })

 console.log(Object.getOwnPropertyDescriptor(chay,"name"));

