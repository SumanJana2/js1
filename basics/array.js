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





//const marvel_heros = ["thor", "Ironman", "spiderman"]
//const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros)//issey kya hoga ki pura dc 
// heros wala array push hoga marvel waley 
// mein kuch is tarike se [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

//console.log(marvel_heros);//op--->[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
//console.log(marvel_heros[3][1]);//op-->flash

//const allHeros = marvel_heros.concat(dc_heros) //iss brakcet mein sirf ek hi value daal saktey hein
//console.log(allHeros);//op-->[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//const all_new_heros = [...marvel_heros, ...dc_heros]//... lagane se hum yeh 
// batate hein ki saarey elements of array ko alag alag treat karo uss wajah se op
//kuch iss tarah ayega --->  [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
//iss waley format se hum bahut saarey arrays ko concat akr saktey hein

// console.log(all_new_heros);op-->[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]] //nested array

//const real_another_array = another_array.flat(Infinity) //nested array 
// to normal array with the help of flat keyword ,,here infinity means
// kaha tak(to which index tak) flaten karna hein 
//console.log(real_another_array);
/*op-->[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5] */



//console.log(Array.isArray("Hitesh"))//op-->false(asking if it array)
//console.log(Array.from("Hitesh"))//op-->[ 'H', 'i', 't', 'e', 's', 'h' ](string to array)
//console.log(Array.from({name: "hitesh"}))//op-->[]  interesting
//  bcoz here hitesh is not convert into array we need to specify either
//  we have to create a array from keys or values???
/*
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));//op-->[ 100, 200, 300 ]
///Note : here score can number,boolean,string or mix*/