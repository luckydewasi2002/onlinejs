// arrays

let myArr = [0,1,2,3,4,5]
let heroes = ["shaktiman","nagraj"]

const myArr2 = new Array(1,2,3,4)

//console.log(myArr[1])  // output is 1

//array method =>

    // myArr.push(6)
    // myArr.push(7)
    // myArr.pop()

    // myArr.unshift(6)
    // myArr.shift()

   // console.log(myArr.includes(9))
   //console.log(myArr.indexOf(3));

//    let newArr = myArr.join();
//     console.log(myArr)
//     console.log(newArr)

//console.log("A",myArr);
let myn1 = myArr.slice(1,3); // slice ke ander original array me koi change nhi hota hai

//console.log(myn1);
//console.log("B",myArr)

let myn2= myArr.splice(1,3)// splice ke ander original array me chage hota hai jo part cut karte hai vo hat jate hai.
//console.log(myn2);
//console.log("C",myArr)