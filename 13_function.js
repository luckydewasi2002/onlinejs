function loginUserMessage(username){
    if(username=== undefined){
        console.log(("please enter a username !"));
        return
    }
    return`${username} just logged in`
}
//console.log(loginUserMessage("lucky"))
//console.log(loginUserMessage())

// function calCulatePrice(...num1){
//     return num1
// }
// console.log(calCulatePrice(200,400,500))

function calCulatePrice(val1,val2,...num1){
    return num1
}
//console.log(calCulatePrice(200,400,500,2000))
const user = {
    username : "laxman",
    price:199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is
     ${anyobject.price}`);
}
//handleObject(user)

const newArray = [200,300,400,100]
function returnSecondValue(getArray){
    return getArray[1]

}
console.log(returnSecondValue(newArray))