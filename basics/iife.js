// Immediately Invoked Function Expressions (IIFE)
// sometimes global scope creates a pollution so wee need to remove some pollution(declarations)
//

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`); //op--> DB CONNECTED
})();//--------------------------->syntax --> ()();(first bracket mein function declaration hoga
// yaha semicolon dalna is very important  
// agar nhi karogey toh error ayega machine ko pata 
// nhi chalega ki fucntion ka end kahan hein)

//*********************************************************************************** */
( () => {       //unamed iife
    console.log(`DB CONNECTED TWO`); //op-->DB CONNECTED TWO
} )();
//arrow function with no arguments
//**************************************************************************************** */
( (name) => { //unamed iife
    console.log(`DB CONNECTED TWO ${name}`);//DB CONNECTED TWO hitesh
} )('hitesh') //arrow fucntion with name as an arguments