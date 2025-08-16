const coding = ["js", "ruby", "java", "python", "cpp"]

/*const values = coding.forEach( (item) => {
        console.log(item);
   } )
   /*op-->js
ruby
java
python
cpp */
//----------------------------------------------------------------------
/*const values = coding.forEach( (item) => {
        //console.log(item);
   } )
console.log(values);  //op--> undefined (beacause forEach fuction doens't have return type)
  */
//-----------------------------------------------------------------------------
/*
const values = coding.forEach( (item) => {
        return item ;
   } )
console.log(values);  //op--> undefined (beacause forEach fuction doens't have return type)
*/
//--------------------------------------------------------------------------------
const values = coding.forEach( (item) => {
        console.log(item)
        return item ;
   } )
console.log(values);
/*op-->js
ruby
java
python
cpp
undefined
 */
///------------------------------------------------------------------------------------------------

//forEach ka koi return type nhi hein thats why we will use now filter for it
//syntax of filter --> objectvar_name.filter(function call back)

/*
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
/*
const newNums = myNums.filter( (num) => {
  return num > 4
 } )
console.log(newNums) //op-->[ 5, 6, 7, 8, 9, 10 ] basically filter is returning value

const newNums1 = myNums.filter( (num) => {
  return num 
 } )
console.log(newNums1)//op-->[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
*/
//-------------------------------------------------------------------------------------------

//same logic like above problem just using forEach to solve it 
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = []

myNums.forEach( (num) => {
    if (num > 4) {
         newNums.push(num)
     }
 } )

console.log(newNums);//op-->[ 5, 6, 7, 8, 9, 10 ]
//----------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')
  console.log(userBooks);
  /*op-->[
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  },
  {
    title: 'Book Seven',
    genre: 'History',
    publish: 1986,
    edition: 1996
  }
] */

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks); 
  /*op-->
  [
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  }
] */