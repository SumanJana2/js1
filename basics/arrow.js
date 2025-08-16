/*
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);//op-->hitesh , welcome to website(yeh kaam kar raha hein because website ko hum inside the scope use kar rahe hein)
        //console.log(this);//op-->
        /* {
            username: 'hitesh',
            price: 999,
            welcomeMessage: [Function: welcomeMessage]
            }
        *//*
    
    
    }

}

user.welcomeMessage()//op-->hitesh , welcome to website(yeh kaam kar raha hein because 
// website ko hum inside the scope use kar rahe hein)
user.username = "sam"//op-->sam , welcome to website(yaaha hum username ko outside the scope change kar
//  rahe hein,, tab bhi yeh kaam isliye kar raha hein kyuki humne this keyword ka use kiya hein
// agar nhi kiya hota toh op kuch aisa ata:ReferenceError: username is not defined)
user.welcomeMessage()
console.log(this);//op-->{}(bcoz we are excessing the 'this' as a current context object outisde the scope)
// (if you run the same code in browser console the op-->window{},,,bcoz window object is an global object and 'this' is pointing to global object  )
console.log(this.price)//op-->undefined
console.log(user.price)//op-->999
*/
/*
function chai(){
     console.log(this);
}*/
//chai()//op-->
/*Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  navigator: [Getter],
  crypto: [Getter]
} */

/*()

function chai(){
    let username = "hitesh"
     console.log(this);
 }*/
// chai()//op-->
 /*Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  navigator: [Getter],
  crypto: [Getter]
} */
/* 
  function chai(){
    let username = "hitesh"
     console.log(this.username);//op---> undefined ,,because we can only use 'this' keyword only in objects wala concepts and inside the scope of an object block  
 }
 chai()
*/


// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);//op--->undefined ,,because we can only use 'this' keyword only in objects wala concepts and inside the scope of an object block  
// }



/*
const chai =  () => {
    let username = "hitesh"
    console.log(this);//op-->{} arrow function mein bhi same hein normal function ki tarah that this keyword use nhi hota 
}
chai()
*/
/*
const chai =  () => {
    let username = "hitesh"
    console.log(this.username);//op-->undefined
}
chai()
*/

//************************************************************************ 
//syntax ---> (parameter_passing)=>{function_body}
/*
const addTwo = (num1, num2) => {  //basic arrow function
     return num1 + num2
 }
console.log(addTwo(3, 4)) //op-->7
*/

/*
const addTwo = (num1, num2) =>  num1 + num2  //implicit return arrow function(you dont have to mention { } and return keyword)
console.log(addTwo(3, 4))//op-->7
*/

//const addTwo = (num1, num2) => ( num1 + num2 ) //returning value
//console.log(addTwo(3, 4))//op-->7
/*
const addTwo = (num1, num2) => ({username: "hitesh"}) //returning object
console.log(addTwo(3, 4))//op-->{ username: 'hitesh' }
*/
/*
const addTwo = (num1, num2) => (username: "hitesh") //returning object
console.log(addTwo(3, 4))//op-->SyntaxError: Unexpected token ':'
*/

const addTwo = (num1, num2) => {username: "hitesh"}//returning object(always use parathesis when returning object)
console.log(addTwo(3, 4))//op-->undefined


//Note: whenever we use scope{} we use return keyword in methods

///-----------------------------------------------------------------------------------------
const myArray = [2, 5, 3, 7, 8]

//myArray.forEach(()=>{})   ///passing arrow function in this function  (we will see)
