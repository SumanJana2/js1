/*
let a = 10
const b = 20
var c = 30  
console.log(a);//op->10
console.log(b);//op->20
console.log(c);//op->30
*/
/*
if (true) {
    let a = 10
    const b = 20
    var c = 30
    console.log("INNER: ", a);//op-->10 (bcoz the a is accessed inside the block)
    
}
//console.log(a);//op-->ReferenceError: a is not defined (bcoz the let keyword make sure that a is not used outside the block/scope/{})
//console.log(b);//op-->ReferenceError: b is not defined (bcoz the const keyword make sure that a is not used outside the block/scope/{})
//console.log(c);//op-->30 (bcoz var keyword is not scope oriented ,,therefore c can be used outisde the block as well)
*/



/*
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);//op-->hitesh (bcoz username variable is accessed inside the scope)
    }
    console.log(website);//op-->ReferenceError: website is not defined(bcoz website is used outside the scope)

     two()

}
one()
*/

//----------------------------------------------------------------------------------------------------
/*
if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);//op---->hitesh youtube (both variables are use inside the scope)
    }
    //console.log(website);//op-->ReferenceError: website is not defined(website is used outside the scope)
}

//console.log(username);//op-->ReferenceError: username is not defined(username is used outside the scope)
*/

// ++++++++++++++++++ interesting ++++++++++++++++++
/////////////////////POST DECLARATION//////////////////////////

/*
//normal function
function addone(num){  //function declaration
    return num + 1
}
console.log(addone(5)) //op-->6 

//function hosting (basically refering variable to a function)
const addTwo = function(num){ //function declaration
    return num + 2
}
console.log(addTwo(5)) //op-->7

*/

//////////////////PRE DECLARATION/////////////////////

/*
//normal function
console.log(addone(5)) //op--->6 (a normal function works even after pre declaration call)
function addone(num){  //function declaration
    return num + 1
}

//function hosting (basically refering variable to a function)
console.log(addTwo(5)) //op-->ReferenceError: Cannot access 'addTwo' before initialization(a hosted function doesn't works after pre declaration call)
const addTwo = function(num){ //function declaration
    return num + 2
}
*/