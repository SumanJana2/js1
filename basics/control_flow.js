// **********************************if**********************************************************
/*syntax--> if (condition){
                    } */
//comparison operator---><,>,<=,>=,==,!=,===,!==
/*
console.log(2!=2) //op-->false
console.log(2!="2") //op--->false (string got converted into number )
console.log(2!=="2")//op-->true(it also check the type)
*/

const isUserloggedIn = true
if (isUserloggedIn){
    //console.log("hi");
}//op--->hi

//************************************if else***************************************************** */
const temperature = 41

if ( temperature < 50 ){
   //console.log("less than 50");
 } 
 else {
// console.log("temperature is greater than 50");
} //op-->less than 50

if ( temperature < 50 ){
   //console.log("less than 50");
 } 
 else {
// console.log("temperature is greater than 50");
} 
//console.log("Execute"); //op--> less than 50
                              // Execute
// <, >, <=, >=, ==, !=, ===, !==

const score = 200

 if (score > 100) {
   let power = "fly"
   // console.log(`User power: ${power}`);
 } //op--->User power: fly

//console.log(`User power: ${power}`);//op-->ReferenceError: power is not defined (bcoz using let wala variable outside the scope)
//****************************short notation of if block************************************ */

const balance = 1000

if (balance > 500) console.log("test"),console.log("test2"); //implicit scoping(basically without {})//multiple statements of if block in the single line
/*op-->test
       test2 */

//*************************************** short notation of if else block********************************************

if (balance > 1000) console.log("inside if");else console.log("inside else");
//op-->inside else

//*************************************** short notation of if else if block********************************************

if (balance > 1000) console.log("inside if");else if (balance>800) console.log("inside else if");else console.log("inside else");
//op-->inside else if

//*********************************if else if block********************************************** */
if (balance < 500) {
   console.log("less than 500");
} else if (balance < 750) {
   console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 750");
} else {
    console.log("less than 1200");
}//op--->less than 1200
//**************************************** if else block with logical operators********************************************************* */
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}//op--->User logged in