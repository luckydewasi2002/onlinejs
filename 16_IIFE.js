// immedietly invoked function expression (IIFE)


//()() //first pranthesis is iife
(function chai(){
    console.log(`DB CONNECTED`);
})();
// ager do iffe lagana hai to semicoolan lgana jaruri hai
( (name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
}) ('laxman')
