//if 

// if(true){

// }
// if(false){

// }

//switch

// switch(key){
//     case value:
//         break;
//         default:
//             break;
// }



// const month =2;
// switch (month) {
//     case 1:
//         console.log("janvaury");
//         break;
//     case 2:
//         console.log("feb");
//         break;
//     case 3:
//         console.log("march");
//         break;
//     case 4:
//         console.log("apr");
//         break;


//     default:
//         console.log("defaul case match");
//         break;
// }

// const userEmail = ""
// if(userEmail){
//     console.log("got user email");
// }
// else{
//     console.log("don't have user email");
// }
//falsy values=.>
//   false ,0 , -0, Bigint 0in,"",null , undefined, NaN

//truthy values=>
    // "0", 'false', " ", [], {}, function(){}, 

//  const userEmail = []
//  if(userEmail.length === 0){
//     console.log("array is empty");
//  }
 
const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
}

//Nullish coalescing operator (??) : null undefined

let val1;
// val1= 5 ?? 10
//val1 = null ?? 10
// val1 = undefined ?? 15

// val1 = null ? 10 ?? 20
  console.log(val1);


  //Ternairy operator

  //condition ? true :false

  const iceTeaPrice = 100
  
iceTeaPrice<=80 ? console.log("less than 80"):console.log("more than 80")