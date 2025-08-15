// array //deep copy(stack mein copy wala scene) //shallow copy(object ka reference wala scene)

//const myArr = [0, 1, 2, 3, 4, 5]///yaha js ka array python ki
//  list ki tarah diff elements rakh saktey hein aur resizable bhi hein aur 
// shallow copy(reference wala scene) banata hein
//const myHeros = ["shaktiman", "naagraj"]//string array

//const myArr2 = new Array(1, 2, 3, 4) //object of array
// console.log(myArr[1]); //1st element in myArr
//console.log(typeof myArr)//object
//console.log(typeof myArr2)//object

// Array methods

// myArr.push(6)//element 6 get add in the array
// myArr.push(7)
// myArr.pop() // last element remove

//myArr.unshift(9)//9 gets added as first element in arr all the elements 
// get shifted to right and last one gets deleted
//myArr.shift()//all the elements get shifted to left and first element gets deleted

// console.log(myArr.includes(9));// array mein 9 hein yaah nhi(true/false)
//console.log(myArr.indexOf(3)); //index of element 3 ,,and
//  if element doesnt exist in arr the op will be -1
/*
const newArr = myArr.join()//add all the elements into string

console.log(myArr);//op--->[0,1,2,3,4,5]
console.log(typeof myArr)//op--?> object
console.log(newArr);//op-->"0,1,2,3,4,5"
console.log(typeof newArr);///op---->String
*/


// slice, splice

//console.log("A ", myArr);//op--> A [0,1,2,3,4,5]
//const myn1 = myArr.slice(1, 3)//op-->[ 1, 2 ](1st index se 2nd index tak)

//console.log(myn1);
//console.log("B ", myArr);//op--> A [0,1,2,3,4,5]


//const myn2 = myArr.splice(1, 3);
//console.log("C ", myArr);//op-->[0,4,5] (splice mein original
//  array mein manipulation hota hein baki mein nhi hota)
//console.log("C",myn2); //op-->[ 1, 2, 3 ](1st index se 3rd index tak)





const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));