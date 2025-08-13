/*let score = "33abc"
console.log(typeof score)
console.log(typeof(score))

let valueinnumber = Number(score)
console.log(typeof valueinnumber);
console.log(valueinnumber)// the op value will be Nan  bcoz the string 33abc which 
// is not convertible to number gets converted into number  //thats why typescript is used
let score1 = null
let score2 = undefined

let valueinn = Number(score1)
let valueinn1 = Number(score2)

console.log(typeof score1)//type - > object
console.log(valueinn)//the op will be 0 //(basic conversion from boolean to int true ->1 //false ->0))
console.log(typeof score2)// type -> undefined 
console.log(valueinn1)//op will be Nan
//------------------------------------------------------------------------------------------------
//"33" => 33 /* to number conversion*/
//"33abc"=>Nan
//true=> 1
//false=>0
//null(object)=> 0
//undefined(undefined)=> Nan       */
//-----------------------------------------------------------------------------------------------------------
/*                      // To boolean conversion
let isLogged = 1
let booleanisLogged = Boolean(isLogged)
console.log(booleanisLogged) //1 => true & 0 => false

let isLogged1 = "hitesh"
let booleanisLogged1 = Boolean(isLogged1)
console.log(booleanisLogged1) //string => true & empty string=> false

let isLogged2 = ""
let booleanisLogged2 = Boolean(isLogged2)
console.log(booleanisLogged2)
*/
//-----------------------------------------------------------------
/*
let s = 33      //To String
let st = String(s)
console.log(st)
console.log(typeof st) // true => "true" & 33=>"33"

let s1 = true
let st1 = String(s1)
console.log(st1)
console.log(typeof st1) */
///-------------------------------------------------------------------------


////****************************Operations***************************** 
/*
let value = 3
let negvslue = -value
console.log(negvslue)

console.log(2+2) //add
console.log(2*2)// multi
console.log(2**2) //power
console.log(2-2) //subs
console.log(2/3) //floor division
console.log(2%3) //remainder
*/
/*let str1 = "hello"
let str2 ="hello"

let str3 = str1+str2
console.log(str3) //concatenation

console.log("1" + 2) /// type promotion of 2 to string //
console.log( 1 + "2") /// type promotion of 1 to string 
console.log( "1" + 2 + 2) // type promotion of both the two in Strings
console.log( 1+ 2 +"2") // type promotion of 3(1+2) in String */
/*
1️⃣ console.log("1" + 2)

"1" ek string hai, + operator ke saath agar koi ek operand string ho to string concatenation hoti hai.

"1" + 2 → "12"
✅ Output: "12"
---
2️⃣ console.log(1 + "2")

Same logic — ek operand string "2" hai, isliye concatenation hoga.

1 + "2" → "12"
✅ Output: "12"
--
3️⃣ console.log("1" + 2 + 2)

Left se evaluate hota hai:

"1" + 2 → "12" (string ban gaya)

"12" + 2 → "122"
✅ Output: "122"
---

4️⃣ console.log(1 + 2 + "2")

Left se evaluate hota hai:

1 + 2 → 3 (yahan dono number hain to numeric addition hoga)

3 + "2" → "32" (ab string concatenation)
✅ Output: "32"
 */
console.log(+true) //op=> 1///the unary operator act here as typeconversion into number and therefore true=>1
console.log(+"")//op=> 0 ///the unary operator act as a typeconversion into number here therefore empty => 0

//console.log(true+) //op=>error kyuki asli format typeconverion ka +true hein naaki true+

let a = 100
console.log(a++)//op = 100 //agar ++a hota toh op =101
console.log(a)//post increment mein value pehele fetch hotey hien phir increment hota hein aand op = 101
//thast why the 100 is value is fetched first as an ouput ,,now after displaying the value of a will be incremnted by one  


