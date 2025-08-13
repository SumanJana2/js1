let score = "33abc"
console.log(typeof score)
console.log(typeof(score))

let valueinnumber = Number(score)
console.log(typeof valueinnumber);
console.log(valueinnumber)// the op value will be Nan  bcoz the string 33abc which 
// is not convertible to number gets converted into number  //thats why typescript is used
let score1 = null
let score2 = undefined

let valueinn = Number(score1)
let valueinn1 = Number(score1)

console.log(typeof score1)//type - > object
console.log(valueinn)//the op will be 0 //(basic conversion from boolean to int true ->1 //false ->0))
console.log(typeof score2)// type -> undefined 
console.log(valueinn1)//op will be Nan

