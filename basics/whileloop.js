//-------------------------------------------------------------------------------------------------



//while loop

let index = 0
 while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 2
 }
 /*op-->Value of index is 0
Value of index is 2
Value of index is 4
Value of index is 6
Value of index is 8
Value of index is 10 */
//---------------------------------------------------------------------------------------------
let myArray = ['flash', "batman", "superman"]

let arr = 0
while (arr < myArray.length) {
    //console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}
/* op-->Value is flash
Value is batman
Value is superman
*/
//-----------------------------------------------------------------------------------------------

//do while(atleast ek baar run hona chahiye)

let score = 11

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);//op---->Score is 11  //atleast ek baar run hoga kyuki condition baad mein check kiya jata hein

//*********************************** */
let score1 = 6

do {
    console.log(`Score1 is ${score1}`);
    score1++
} while (score1 <= 10);
/*op--->Score1 is 6
Score1 is 7
Score1 is 8
Score1 is 9
Score1 is 10 */
