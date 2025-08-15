//objects do taraha se bante hein ek literal ki tarah aur dusra obejcts ki tarah
// singleton - constructor se banaya hua object ko hum singleton object boltey hein(object.create)

//const mySym = Symbol("key1")
/*

const JsUser = { //literal ki tarah objects created toh singleton object nhi banta 
    name: "Hitesh", //--------name is key and hitesh is value here name is string and hitesh is also string
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",//symbol ko as a key use karna hein toh  aise likhe hein
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}*/


//console.log(JsUser.email)//op--->hitesh@google.com
//op ssame isliye aa raha hein kyuki email ko as string("email") maan liya
//console.log(JsUser."email")//op---->Syntax error
//console.log(JsUser["email"])//op-->hitesh@google.com 
//console.log(JsUser["full name"])//op--->Hitesh Choudhary
//console.log(JsUser.full name)//op--> error bcoz yaha object creation ke 
// time humne full name ko "full name" aise likha tha toh isi wajah se Juser.full name wala
//  function kaam nhi karega
//console.log(JsUser.[full name])//op-->error
//console.log(JsUser."full name")//op-->error
//console.log(JsUser.mySym)//op-->mykey1 datatype changes from symbol to string which we dont want //yeh tab hota jab upar hum mySym ="mykey1" likha hota 
//op-->undefined //yeh tab hota jab upar hum [mySym] ="mykey1" likha hota 
//console.log(JsUser[mySym])//op-->mykey1 //yeh tab hota jab upar hum [mySym] ="mykey1" likha hota

//JsUser.email = "hitesh@chatgpt.com"
//Object.freeze(JsUser) // if we dont want changes in object value //
//--------yaha par freeze ho gayi value email ki
//JsUser.email = "hitesh@microsoft.com"
//console.log(JsUser);
/*op------>{
  name: 'Hitesh',
  'full name': 'Hitesh Choudhary',
  age: 18,
  location: 'Jaipur',
  email: 'hitesh@chatgpt.com',
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Saturday' ],
  [Symbol(key1)]: 'mykey1'
} */
/*
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); //this keyword refers to current object
}

console.log(JsUser.greeting());//op-->Hello JS user undefined //yeh undefined islye aya kyuki funtion doesnt return anything
console.log(JsUser.greeting);//op--->[Function (anonymous)] funtion run toh 
// gaya but koi reference variable nahi aya
console.log(JsUser.greetingTwo());//op-->Hello JS user, Hitesh undefined //yeh undefine isliye aya kyuki funtion doesnt return anything

*/



//-------------------objects singleton with constructor-------------------------


//const tinderUser = new Object() //singleton
// console.log(tinderUser); op-->{} empty object if nothing is mention only the creation part is done
//const tinderUser = {} //nonsingleton
//// console.log(tinderUser); op-->{} empty object if nothing is mention only the creation part is done
/*
const tinderUser = {}  //method1
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false*/
//console.log(tinderUser)//op-->{ id: '123abc', name: 'Sammy', isLoggedIn: false }

/*
const regularUser = { //method2 //nested objects
    email: "some@gmail.com",
    fullname: {  //object
        userfullname: {   //object (object ke andar object)
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}*/
//console.log(regularUser)
/*op-->{
  email: 'some@gmail.com',
  fullname: { userfullname: { firstname: 'hitesh', lastname: 'choudhary' } }
}*/
//console.log(regularUser.fullname)/*op-->{ userfullname: { firstname: 'hitesh', lastname: 'choudhary' } */
//console.log(regularUser.fullname.userfullname)//op-->{ firstname: 'hitesh', lastname: 'choudhary' }
//console.log(regularUser.fullname.userfullname.firstname);//op--> hitesh 
/*
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
*/
//const obj3 = { obj1, obj2 }
//console.log(obj3);//op-->{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } } same array wala problem elements ke 
// jaga pura object as an element jud jaa raha hein
//const obj3 = Object.assign({}, obj1, obj2, obj4) method1
//console.log(obj3)//op-->{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
//const obj3 = Object.assign(obj1, obj2, obj4) //method2
//console.log(obj3)//op-->{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
//method1 and 2 same output de raha hein
//  because method1 mein puri value jaakey {}(target variable)idhar store ho rahi hein
//jabki method 2 mein puri value obj1 mein jaa rahi hein iska proof niche hein
//console.log(obj1)//op----> { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
//console.log(obj3==obj1)//op-->true
/*
const obj3 = {...obj1, ...obj2} ///method 3
console.log(obj3);//op--->{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
*/
/*
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
] ///////////////////////////////////////array of objects
*/
//console.log(users[1].email)//op---->h@gmail.com
//console.log(tinderUser);/*{ id: '123abc', name: 'Sammy', isLoggedIn: false } */

//console.log(Object.keys(tinderUser));//op-->[ 'id', 'name', 'isLoggedIn' ] (array os keys)
//console.log(Object.values(tinderUser));//op->[ '123abc', 'Sammy', false ](array of values)
//console.log(Object.entries(tinderUser));//op-->[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ](key value pairs)

//console.log(tinderUser.hasOwnProperty('isLoggedIn'));//op-->true (asking tinderUser if it has a key name "isLoggedIn")
//console.log(tinderUser.hasOwnProperty('Sammy')) //op -->false because it checks only the key part
//console.log(tinderUser.hasOwnProperty('id'))//op--- true

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]