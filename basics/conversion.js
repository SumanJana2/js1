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
/*
console.log(+true) //op=> 1///the unary operator act here as typeconversion into number and therefore true=>1
console.log(+"")//op=> 0 ///the unary operator act as a typeconversion into number here therefore empty => 0

//console.log(true+) //op=>error kyuki asli format typeconverion ka +true hein naaki true+

let a = 100
console.log(a++)//op = 100 //agar ++a hota toh op =101
console.log(a)//post increment mein value pehele fetch hotey hien phir increment hota hein aand op = 101
//thast why the 100 is value is fetched first as an ouput ,,now after displaying the value of a will be incremnted by one  
*/
//************************** Comparisons***********************/
//console.log(2 > 1)
//console.log(2 >= 1)
//console.log(2 <= 1)
//console.log(2 < 1)
//console.log(2 == 1)
//console.log(2 != 1)
//console.log("2" > 1) //op--> is true bcoz "2" gets automatically coverted into number for comaprisons 
//console.log("02" > 1) //op--> is true bocz "02" gets auto converted into number for comparison
//for such type of conversion make sure that string must be convertible into number 
//console.log("35fdfdfgdt" > 3)//op -->  false (any comparisons with Nan is false bcoz 
// covernting that string into number will give us NaN)
/*
console.log(null>0)//false bcoz null  = 0 when null is converted into string 
console.log(null ==0)//false bcoz null==undefined
console.log(null>=0) //true bcoz null = 0 when null converted into string 
console.log(null<=0) // true bcoz null = 0 when null converted into string
console.log(null !=0)//true bcoz null = undefined
console.log(null<0)// false bocz null = 0 when null is converted into string 
*/
/*
console.log(undefined ==0) //Nan comparisons with any number is false 
console.log(undefined !=0) //op--> true bcoz (undefined == null)
console.log(undefined <0)//false
console.log(undefined >0)//false
console.log(undefined <=0)//false
console.log(undefined >=0)//false
*/

// === strict comaprison (check the value as well the data type)
// console.log("2"===2) //op--> because it also check value and dataype both but
 //  in == scenario it was only checking value therefore i was showing true but in this case is the false


 /*Equality (== and ===)

Value 1 Value 2 == ===

null null true true
null undefined true false
null 0 false false
null false false false
null "" (empty) false false
undefined undefined true true
undefined 0 false false
undefined false false false
0 false true false
0 "" (empty) true false
false "" (empty) true false
true 1 true false
false 0 true false



---

🔹 Relational (<, >, <=, >=)

Expression Result Reason

null < 0 false null → 0, 0 < 0 is false
null <= 0 true null → 0, 0 <= 0 is true
null > 0 false 0 > 0 is false
undefined < 0 false undefined → NaN, any comparison with NaN is false
undefined > 0 false NaN > 0 is false
undefined <= 0 false NaN <= 0 is false
0 < "" false "" → 0, 0 < 0 false
0 <= "" true "" → 0, 0 <= 0 true
false < true true false → 0, true → 1, so 0 < 1
true > 0 true true → 1, 1 > 0
"5" < 10 true "5" → 5, 5 < 10
"abc" < 10 false "abc" → NaN, NaN < 10 false



---

✅ Big Picture Rules:

1. null == undefined is the only loose equality special case.


2. == will coerce types, === will not.


3. In numeric comparisons:

null → 0

undefined → NaN (so always false)

true → 1, false → 0

"" → 0, "123" → 123, non-numeric strings → NaN */


