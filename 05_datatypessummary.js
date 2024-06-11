// primitive datatype
//7 types: string , number , boolean, null,,undefined,
//        symbol, bigint


//reference datadype (non primitive)
// array,objects, functions

//++++++++++++++++++++++++++++
// stack (primitive) , heap(non-primitive) 
let myYoutubename = "luckydewasi"
let anothername = myYoutubename;

anothername = "chay or code"
console.log(myYoutubename)
console.log(anothername)


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "laxman@google@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)

