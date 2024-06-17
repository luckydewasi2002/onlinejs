// //for of 

// const arr =[1,2,3,4,5]

// for(const num of arr){
//     console.log(num);
// }


// const greetings = "hello world";

// for (const greet of greetings) {
//     console.log(`each char is ${greet}`);
// }

// //maps=>

//     const map = new Map()
//     map.set('IN',"India")
//     map.set('USA', "Unaited States ")
//     map.set('Fr', "France")
//    // console.log(map);

//    for (const [key,value] of map) {
//     console.log(key,':-',value);
//    }

//    const myObject ={
//     'game1:NFS',
//     'game2':"spidername"
//    }
//    for (const [key,value] of myObject) {
//     console.log(key,':_',value);
//    }

const myobj= {
    js:"javascript",
    cpp:"c++",
    py:"python",

}
for (const key in myobj) {
   console.log(`${key} shortuct is for ${myobj[key]}`);
    }

const programming=["js","python","c++"]

for(const key in programming){
    console.log(programming[key]);
}

const map = new Map()
    map.set('IN',"India")
    map.set('USA', "Unaited States ")
    map.set('Fr', "France")
   // console.log(map);

   for (const key in map) {
    console.log(key);
   }

   const coding =["js","rb","java","pyt","cpp"]

//    coding.forEach(  function(val){
//     console.log(val);
//    })

// coding.forEach((val)=>{
//     console.log(val);
// })

//coding.forEach(printMe)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })


const myCoding = [
    {
        languagename:"javascript",
        filename:"js"
    },
    {
        languagename:"java",
        filename:"java"
    },
    {
        languagename:"python",
        filename:"py"
    }
]

myCoding.forEach( (item)=>{

    console.log(item.filename);
})

