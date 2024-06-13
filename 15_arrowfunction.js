const user = {
    username :"laxman",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`)//present scope se value ko catch karne ke liye
    //  console.log(this)
    }

}
// user.welcomeMessage()
// user.username= "lucky"
// user.welcomeMessage()

//console.log(this) //empty object output

function chai(){
    let username = "laxman"
    //console.log(this.username);//function me this se value nhi utha ssakte hai sirf object me 
}
chai()


//()=>{} arrow function

// const addnum =(num1,num2)=>{
//     return num1+num2
// }
// console.log(addnum(5,6))

//const addnum =(num1,num2)=> num1+num2

const addnum =(num1,num2)=> (num1+num2)

console.log(addnum(5,6))