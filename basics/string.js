//const name = "hitesh"
//const repoCount = 50

// console.log(name + repoCount + " Value");///aise format mein use karne ke bajai 
// hum string interpolation ka use kar sakte hein kuyki name ke saam hum 
// dynamically funciton bhi use kar skatey hein eg : ${name.length()}

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//string interpolation

//const gameName = new String('hitesh-hc-com')    ///obejct of string 
/* yeh kuch aise store hota hein 
gameName ={
0:h,
1:i,
......} */

// console.log(gameName[0]); pehlea character milega 
// console.log(gameName.__proto__); ///op => {} yeh empty nhi hein 
// bas yeh object ko darshata hein  //proto means prototype jismey string se related saarey function hein
//console.log(gameName.__proto__.length) issey bhi hum length acces kar saktey hein 


// console.log(gameName.length); // to get the length of the string
// console.log(gameName.toUpperCase()); //to convert into the uppercase//original string mein kuch change nhi 
// hoga bas uske ek copy mein change hoga 
//console.log(gameName.charAt(2)); //to get char at index 2 which is t
//console.log(gameName.indexOf('t'));// t ka index

//const newString = gameName.substring(0, 4)//yeh negavtive value accept karta hein
//  but woh ussey obey nahi karega 
//console.log(newString); //0 se 3rd index tak string chahiye (string slicing)

//const anotherString = gameName.slice(-8, 4) //-ve value piche se start karega 
//console.log(anotherString);

//const newStringOne = "   hitesh    "
//console.log(newStringOne);
//console.log(newStringOne.trim());//space trim kartey hein//trimStrat & trimEnd aur bhi func hein

//const url = "https://hitesh.com/hitesh%20choudhary"

//console.log(url.replace('%20', '-'))

//console.log(url.includes('sundar'))//to check wheter some substriung is present in the orgoinal string

//console.log(gameName.split('-')); //spliting the string using delimeter '-' convert the stirg into array (["https://hitesh.com/hitesh", "choudhary"])
//console.log(("  suman \n jana  ").trim())
//op--> suman
//        jana (\n didn't get trim and also the spoace between them)