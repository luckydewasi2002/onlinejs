// singleton 

//object literals

const mySym = Symbol("key1")
let jsUser = {
    name: "Laxman",
    age: 22,
    location:"jaipur",
    email: "lax@google.com",
    isLoggedIn:false,
    [mySym]:"mykey1",//symbol declareation in brackets
    lastLoginDays:["mondat","saturday"]
}
// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser[mySym])

jsUser.email = "lax@chatgpt.com"//change the email
//Object.freeze(jsUser)//object ko freeze karne par object me kuch bhi change nhi kar sakte hai
jsUser.email = "lax@microsoft.com"//object.freeze ke bad no change
//console.log(jsUser)

jsUser.greeting = function(){
    console.log("hello JS user")
}
jsUser.greetingTwo = function(){
    console.log(`hello JS user , ${this.name}`)
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo())
