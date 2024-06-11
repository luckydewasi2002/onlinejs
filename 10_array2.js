const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros =["superman","flash","batman"]
//marvel_heros.push(dc_heros);

//console.log(marvel_heros);
//const allheros= marvel_heros.concat(dc_heros)//concat always new array return
//console.log(allheros)

const all_newheros = [...marvel_heros,...dc_heros]//spred method 
//console.log(all_newheros)

const another_array = [1,2,3,[1,2,[1,2,3,[1,2]]]]
const real_another_array =another_array.flat(Infinity)//flat all sub array ko singal array me convert kar deta hai 
console.log(real_another_array)

console.log(Array.isArray("laxman"))
console.log(Array.from("laxman"))// convert to array

console.log(Array.from({name:"laxman"})) //return to empty array because ya to key ya valu ka hi array bnayega 

let score1 = 100;
let score2 = 200;
let score3= 300;

console.log(Array.of(score1, score2, score3))//variable to convert array