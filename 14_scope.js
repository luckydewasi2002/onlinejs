let a =300;
if(true){
    let a = 10;
   const b= 20;
   console.log("inner :",a)
}



//console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const username ="laxmandewasi"

    function two(){
        const website = "ramnujan"
        console.log(username)
        
    }
    //console.log(website)//not run
    two()
}
//one()

if(true){
    const username = "laxman"
    if(username === "laxman"){
        const website = " dewasi"
        console.log(username + website)
    }
}

//++++++++++++intersting++++++++++++
console.log(addone(5))
function addone (num){ //agr normal fonction declare karte hai to usse pehle bhi argument pass kar sakte hai
    return num+1
}

 const addtwo= function(num){
        return num+2
}
console.log(addtwo(5))//ager function ko varible ke through declare karte ho to argument last me pass karte hai or functio declara top me karte hai jise hosting varible bhi kehte hai
