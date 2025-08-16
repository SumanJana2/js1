
// ["", "", ""] //array of strings
// [{}, {}, {}] //array of objects
//************************************************************************************************* */
//for of loop
//syntax-->for(const iterator of object(array,string)){
//              }

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}
/*op-->1
2
3
4
5 */



const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}
/*op-->Each char is H
Each char is e
Each char is l
Each char is l
Each char is o
Each char is  
Each char is w
Each char is o
Each char is r
Each char is l
Each char is d
Each char is !*/
//*********************************************************************************** 


// Maps--is an object which holds key-value pair aur yeh pair unique hogi
//new Map()--->map creation
//yaha key or value object type bhi ho sakta hein yaah phir primitive type

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
//console.log(map);
/*op-->Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
} */

for (const [key] of map) {
    //console.log(key);
}/*op-->IN
USA
Fr
 */


for (const key of map) {
    //console.log(key);
}/*op-->[ 'IN', 'India' ]
[ 'USA', 'United States of America' ]
[ 'Fr', 'France' ] */

for (const value of map) {
    //console.log(value);
}/*op-->[ 'IN', 'India' ]
[ 'USA', 'United States of America' ]
[ 'Fr', 'France' ] */

for (const [value] of map) {
    //console.log(value);
}/*op-->IN
USA
Fr */

for (const [key,value] of map) {
    //console.log(value);
}/*op-->India
United States of America
France */

for (const [key,value] of map) {
    //console.log(key);
}/*op-->IN
USA
Fr */

for (const [key,value] of map) {
    //console.log(key,value);
}/*op-->IN India
USA United States of America
Fr France */

//-------------------------------------------------------------------------------------------------


const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
   console.log(key, ':-', value);
 }//op-->TypeError: myObject is not iterable (object ko tu iterator se iterate nhi kar sakta hein,, woh sirf array aur string jaise objects mein hota hein)
