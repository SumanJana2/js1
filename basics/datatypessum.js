//primitive datatypes (7types)(call by value--sidha value milega)
/*-->String
-->undefined
-->null
-->boolean
-->number
-->symbol(unquie banane ke liye hota hein)
-->Bigint(scientific value)
 */


//Reference(Non primitive)(call by refernece ---sidha address milega)
/*-->array
-->objects
-->functions
 */
//-------------------------------
/*
const score =100 //number
const scorv=100.5 //number
const isloggedin= false //boolean
const issjnn = null //null is type of object
let usermail;//undefined
const sgdg= 35263264263642342434264342n//big int
const id = Symbol('123')//symbol
const fhyfy= Symbol('123')//symbol
console.log(id === fhyfy)// op--> false bcoz even though 
// the value is same but the symbol keyword makes it unquie 


const heros= ["sharktimAN","NAAGRAJ"]///array is also a type of oject
let obj={
    name:"bfhfbhsd",
    age : 45   //////////object
}

const myfunction = function(){ //my funtion is function name and we use funtion keyword 
    console.log("hello")
}

console.log(typeof myfunction)          
console.log(typeof obj)
console.log(typeof heros)
console.log(typeof id)
console.log(typeof sgdg)
console.log(typeof usermail)
console.log(typeof issjnn)
console.log(typeof scorv)
console.log(typeof score)
console.log(typeof isloggedin)
*/
/*------op----------- 
function object
object 
object
symbol
bigint
undefined
object
number
number
boolean*/

//two types of memory
/*
stack and heap (primitve data goes to stack and non primitive goes to heap) */
/*
const v = "suman"
let m = v
console.log(m)//output suman bcoz m got a copy of var v insinde the stack memory 
m = "jana"//changes is made in the copy of var v 

console.log(m)//output jana bocz m got a new value 
console.log(v)//output suman bcoz we not changed anything in v variable

let user = {
    email:"suman",
    upi:"sumanupi"
}
 let user2 = user 
console.log(user2.email) //op suman bcoz user2 and user are refering to same object 
user2.email ="sumanhdhdhdhd" //changes is made in object value in heap memory
console.log(user.email) //op sumanhdhdhdhd bocs object 
// value of user2 got changed and they both were refreing to same object
console.log(user2.email)//op sumanhdhdhdhd bocs object 
// value of user2 got changed and they both were refreing to same object
*/
//-------------------------------------------------------------

