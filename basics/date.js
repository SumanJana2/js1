// Dates

//let myDate = new Date() //object of date
//console.log(myDate.toString());//from  date to String (both date and time and standard)
//console.log(myDate.toDateString());// only date
//console.log(myDate.toLocaleString()); date and time 
//console.log(typeof myDate);
/*op--> Fri Aug 15 2025 09:40:53 GMT+0000 (Coordinated Universal Time)
Fri Aug 15 2025
8/15/2025, 9:40:53 AM
object */

//let myCreatedDate = new Date(2023, 0, 23)//op-->2023-01-23T00:00:00.000Z||1/23/2023, 12:00:00 AM||Mon Jan 23 2023
//agar mujhe khud se date karna hein toh yeh syntax chahiye(year,month,date)
//let myCreatedDate = new Date(2023, 0, 23, 5, 3)//op-->2023-01-23T05:03:00.000Z||1/23/2023, 5:03:00 AM||Mon Jan 23 2023
//agar mujhe khud se date karna hein toh yeh syntax chahiye(year,month,date,hours,min)
//let myCreatedDate = new Date("2023-01-14")//op--->1/14/2023, 12:00:00 AM
//let myCreatedDate = new Date("01-14-2023")
//console.log(myCreatedDate.toLocaleString());

//let myTimeStamp = Date.now() ---> to get the timestamp

// console.log(myTimeStamp);//op------>12345665433555ms
//console.log(myCreatedDate.getTime());//op--> 1275553276727236ms mere banaye huye date se ab tak ka timestamp 
// console.log(Math.floor(Date.now()/1000));//coverting ms to s op--->12673135735.665 s

let newDate = new Date()//op-->2025-08-15T09:57:02.622Z
//console.log(newDate);
//console.log(newDate.getMonth() + 1);//op--> 8th month
//console.log(newDate.getDay());//op-->5th day i.e friday

//`${newDate.getDay()} and the time `

console.log(newDate.toLocaleString('default', {
    weekday: "short", //op-->Fri(short) ,,,, op-->friday(long),,,op-->F(narrow)
}))