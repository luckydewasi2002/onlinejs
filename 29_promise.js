// const promiseOne = new promise(fuction(resolve, PromiseRejectionEvent){
// //do an async task
// //db calls, cryptography, network

// setTimeout(function(){
//     console.log('async task is complete')
//     resolve()
// },1000)

// })

// promiseOne.then(function(){
//     console.log("promise consumed")
// })

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("async 2 resolved")
})
