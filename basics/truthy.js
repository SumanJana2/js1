//truthy values aise value hein jissey hum assume kar lete hein uski value 'true' hein
//for eg: non empty string ko hum true maan lete hein //code iske niche :
const userEmail = "hello"

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}//op-->Got user email (yeh if block run hua kyuki usne assume kiya ki "hello"(non empty string) ek 'true' value hein)
//----------------------------------------------------------------------------------------
const userEmail1 = []

if (userEmail1) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}//op-->Got user email ([] empty array ko bhi hum true maan lete hein)
//-------------------------------------------------------------------------------------
const userEmail2 = 4

if (userEmail2) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}//op-->Got user email (4 ko bhi hum true maan lete hein)
//-------------------------------------------------------------------------------------
const userEmail3 = ""

if (userEmail3) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}//op-->Don't have user email(bcoz empty string is treated as false therefore "" is falsy value)
//-----------------------------------------------------------------------------------------


// falsy values----->>>>>>>>false, 0, -0, BigInt 0n, "", null, undefined, NaN(baaki sab truthy value)

//truthy values ke eg:--->>>>>>>>>>>>>>>>>>>>>"0", 'false', " ", []-->empty array, {}-->empty object, function(){}-->empty funtion

if (userEmail1.length === 0) {
   console.log("Array is empty");//op-->Array is empty
 } //to check whether array is empty or not

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");//op-->Object is empty
}//to check whether the object is empty or not

//---------------------------------------------------------------------------------------------
// Nullish Coalescing Operator (??): important keywords-->null & undefined

let val1;
// val1 = 5 ?? 10 //op-->5 (?? ke pehele default value hoti hein but agar woh default value null,undefined ho toh next value automatically select ho jaati hein)
// val1 = null ?? 10 //op-->10 
// val1 = undefined ?? 15//op-->15
val1 = null ?? 10 ?? 20//op-->10
console.log(val1);
//------------------------------------------------------------------------------------------------


// Terniary Operator :    syntax --> condition ? true : false (if else statement eg.)

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")//op-->more than 80