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
        */
    
    
    }

}

user.welcomeMessage()//op-->hitesh , welcome to website(yeh kaam kar raha hein because 
// website ko hum inside the scope use kar rahe hein)
user.username = "sam"//op-->sam , welcome to website(yaaha hum username ko outside the scope change kar
//  rahe hein,, tab bhi yeh kaam isliye kar raha hein kyuki humne this keyword ka use kiya hein
// agar nhi kiya hota toh op kuch aisa ata:ReferenceError: username is not defined)
user.welcomeMessage()
console.log(this);//op-->{}(bcoz we are excessing the object outisde the scope)
console.log(this.price)//op-->undefined
console.log(user.price)//op-->999

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()