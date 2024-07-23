/// ES6

// class user {
//     constructor(username,email,password){
//         this.username=username;
//         this.email=email;
//         this.password=password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chay =new user("laxman","chay@gmail.com","123")
// console.log(chay.encryptPassword());
// console.log(chay.changeUsername());

//behind the scene

// function user(username,email,password){
//     this.username=username;
//     this.email=email;
//     this.password=password;
// }

// user.prototype.encryptPassword=function(){
//      return `${this.password}abc`
// }

// user.prototype.changeUsername=function(){
//      return `${this.username.toUpperCase()}`
// }

// const tea =new user("tea","tea@gmail.com" ,"123")

// console.log(tea.encryptPassword());
// console.log(tea.changeUsername());







//----------------------------------------------------------------
// class user {
//     constructor(username){
//         this.username=username;
//     }
//     logMe(){
//         console.log(`USERNAME is ${this.username}`)
//     }
// }
// class teacher extends user{
//     constructor(username,email,password){
//        super(username)
//         this.email=email;
//         this.password=password
//     }

//     addCourse(){
//         console.log(`A new course was added by ${this.username}`);
//     }

// }
// const chay=new teacher("chay","chay@gmail.com","123")

// chay.addCourse()
// const masalaChay=new user("masalaChay")
// masalaChay.logMe()

// console.log(chay instanceof user)







//--------------------------------------

class user {
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`username :${this.username}`);
    }

   static createId(){
   return `123`
}
}

const laxman =new user("laxman dewasi")
//console.log(laxman.createId());

class teacher extends user{
    constructor(username,email){
       super(username)
        this.email=email
    }
}

const oneplus= new teacher("iphone","oneplus@gmail.com")
console.log(iphone.createId());