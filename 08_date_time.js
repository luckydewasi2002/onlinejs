// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

// let myCreatedDate = new Date(2023,0,23)
// console.log(myCreatedDate.toDateString())

// let  myCreatedDate = new Date(2023,0,23,5,3);
// console.log(myCreatedDate.toLocaleString())

// let  myCreatedDate = new Date("2024-06-12");
// console.log(myCreatedDate.toLocaleString())

// let  myCreatedDate = new Date("06-12-2024");
 //console.log(myCreatedDate.toLocaleString())

// let myTimeStamp = Date.now()

// console.log(myTimeStamp);

// console.log(math.floor(Date.now()/1000))// second me divide ke liye

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() +1);
console.log(newDate.getDay())

// `${newDate.getDay()} and the time`


newDate.toLocaleString('default',{
    weekday:"long"
})