// singlton object 
//const tinderUser = new Object()


const tinderUser= {}

tinderUser.id = "123abc"
tinderUser.name = "pant"
tinderUser.isLoggedIn = false
//console.log(tinderUser)

const regularUser = {
        email:"lax@regex.com",
        fullName:{
            userfullname:{
                firstname:"laxman",
                lastname:"dewasi"

            }
        }
}
//console.log(regularUser.fullName.userfullname.firstname)


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = {5:"a",6:"b"}

// const obj4= {obj1,obj2,obj3}// object ke ander hi object ki form me aate hai

//const obj4 = Object.assign({},obj1,obj2,obj3)// ek hi object me combine karne ke liye

const obj4 ={...obj1,...obj2,...obj3}//by spred formet
//console.log(obj4)

const users = [
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
]
users[1].email

console.log((tinderUser));

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course = {
    coursename : "js in hindi",
    price:"999",
    courseInstructor: "Laxman"
}
const {courseInstructor: instructer}= course

//console.log(instructer)

