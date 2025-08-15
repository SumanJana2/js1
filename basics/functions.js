/*
function sayMyName(){ //function definition
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
// op--->
H
I
T
E
S
H */
//sayMyName()//funtion call here sayMyName is a reference and () is execution
//sayMyName op--> blank 


/*
 function addTwoNumbers1(number1, number2){  //here number1 and number2 are parameters

     console.log(number1 + number2); //console.log ke wajah se 8 print ho raha hein
 }
// addTwoNumbers1() //op--->NaN bcoz no argument were passed
// addTwoNumbers1(3,4)//op--->7 //here 3 and 4 are Arguments
// addTwoNumbers1(3,"4")//op-->34 (bcoz 3 is first converted into string and concatnated with 4)
// addTwoNumbers1("4",3)//43
// addTwoNumbers1(3,"a")//op-->3a
// addTwoNumbers1(3,null)//op-->3 bcoz null is converted into 0 first and then 3+0= 3
 const result1 = addTwoNumbers1(3, 5)//op-->8
 console.log(result1)//op--->undefined because function has no returntype
 /*
 8
undefined
*/



/*
function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

console.log("Result: ", result); //op-->Result:  8 (yaha "Result: 8" ke pehele 8 isliye print nhi ho raha hein kyuki humne console ke bajay return likha)

*/



/*
function loginUserMessage(username = "sam"){ //yaha humne default value set ki hein & thats why our program flow will never enter the if block 
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())//op-->sam just logged in
console.log(loginUserMessage("hitesh"))//op-->hitesh just logged in
*/





function calculateCartPrice(val1, val2, ...num1){  
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));