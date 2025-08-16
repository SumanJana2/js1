
//reduce function

/*const array = [1,2,3,4]
 0+1+2+3+4 -->logic of reduce just like agregate function 
 const initialValue= 0
 const sumWithInitial = array.reduce((accumulator,currentValue)=>accumulator + currentValue,initialValue)
 */


const myNums = [1, 2, 3]
const myTotal = myNums.reduce(function (acc, currval) {
     return acc + currval
}, 0)
console.log(myTotal);//op-->6
//----------------------------------------------------------------
const myTotal1 = myNums.reduce(function (acc, currval) {
   console.log(`acc: ${acc} and currval: ${currval}`);
     return acc + currval
}, 0)
console.log(myTotal1);
/*op-->acc: 0 and currval: 1
acc: 1 and currval: 2
acc: 3 and currval: 3
6
 */
//*************************************************************************** */
//reduce funtion written with arrow function

const myTotal2 = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal2);//op-->6


//************************************************************************************************* */

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)//yaha item jo hein woh ek object hein aur ussey humne as a parameter pass kiya hein jaise hum normal funtion mein kartey hein

console.log(priceToPay);//op--->22996