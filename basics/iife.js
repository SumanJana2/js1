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

///---------------------------------------------------


/*

(( () => {       //unamed iife
    console.log(`DB CONNECTED TWO`); //op-->DB CONNECTED TWO
} )() 

( (name) => { //unamed iife
    console.log(`DB CONNECTED TWO ${name}`);//DB CONNECTED TWO hitesh
} )('hitesh'))();  ////////////////////////ek iife ke andar do fucntion kaam nhi karta 
 /*op-->DB CONNECTED TWO
/workspaces/js1/basics/iife.js:28
( (name) => { //unamed iife  

*/

/*
IIFE means a function that is defined and immediately executed:

(function () {
  console.log("I run immediately!");
})();


---

2. Why do we need IIFE?

a) Avoid polluting the global scope

In JavaScript, if you declare variables/functions at the top level, they go into the global scope.

Too many globals can cause naming conflicts.

With IIFE, variables stay inside the function’s scope and don’t leak outside.


Example without IIFE:

var message = "Hello";   // global variable
console.log(message);

Example with IIFE:

(function () {
  var message = "Hello"; // scoped to this function
  console.log(message);
})();
console.log(message); // ❌ ReferenceError


---

b) Data privacy (encapsulation)

Sometimes you want to hide certain variables and only expose what’s needed.

IIFE helps create private variables.


let counter = (function () {
  let count = 0; // private variable

  return {
    increment: function () { count++; return count; },
    decrement: function () { count--; return count; }
  };
})();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.count);       // undefined (private!)


---

c) Initialize code immediately

If you just want to run some code once (setup, config, etc.), IIFE is handy.


(function () {
  console.log("App initialized!");
  // setup tasks here
})();


---

d) Before let and const

In old JavaScript (var days), var variables were function-scoped, not block-scoped.

Developers used IIFE to create a new scope and avoid variable clashes.


Example (old days):

for (var i = 1; i <= 3; i++) {
  (function (n) {
    setTimeout(() => console.log(n), 1000);
  })(i);
}

Output → 1, 2, 3 (without IIFE, all would log 4).*/


//************************************************************************************* */
for (var i = 1; i <= 3; i++) {
        setTimeout(() => console.log(i), 1000);
}

//output--> 4 4 4
/*for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}


---

Step 1: Loop starts

var i = 1

setTimeout is called → schedules a callback ( () => console.log(i) ) to run after 1000ms.

But setTimeout does not execute immediately. It just registers the callback in the event queue.


So after 1st iteration:

One callback is waiting in the queue.

i = 2 (loop continues).



---

Step 2: Loop continues

i = 2

Another setTimeout callback is scheduled. Again, it won’t run yet.

Loop moves on → i = 3.



---

Step 3: Loop continues

i = 3

A third setTimeout callback is scheduled.

Loop moves on → i = 4.
Loop condition fails (i <= 3 is false), loop exits.



---

Step 4: After loop ends

Now all three callbacks are waiting in the event queue, but the loop has already finished.
At this moment:

i = 4 (final value after loop exit).



---

Step 5: Event loop executes callbacks

After ~1000ms, the event loop starts running your scheduled callbacks one by one.

Each callback says:

() => console.log(i)

But remember: with var, there is one shared i variable for the whole function scope.
By the time callbacks run, i is already 4.

So output is:

4
4
4


---
Why does this happen?

setTimeout is asynchronous. The loop finishes before the callbacks run.

var is function-scoped, so all callbacks “share” the same i variable.

By the time they run, i has the last value (4).



---

How to fix it:

1. Use let (block scoped, new i for each iteration):



for (let i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// 1 2 3

2. Use IIFE (capture current value):



for (var i = 1; i <= 3; i++) {
  (function(n) {
    setTimeout(() => console.log(n), 1000);
  })(i);
}
// 1 2 3 
// 
//*****************************************************************************************/
/*Code:

for (let i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}


---

Step 1: Key difference (let vs var)

let is block scoped.

In a for loop, every iteration creates a new copy of i.

So, in iteration 1, there is a separate i = 1, in iteration 2 a separate i = 2, etc.


This is why let “remembers” the correct value inside each scheduled callback.


---

Step 2: Loop execution

Iteration 1:

i = 1

setTimeout(() => console.log(i), 1000) is scheduled.

Callback closes over the i of this iteration (which is 1).


Iteration 2:

i = 2

A new i binding is created for this iteration.

Callback closes over this new i (which is 2).


Iteration 3:

i = 3

Another new i binding is created.

Callback closes over this i (which is 3).


Loop ends.


---

Step 3: After loop finishes

Three callbacks are waiting in the event queue.

Each callback holds a reference to its own i copy:

Callback1 → i = 1

Callback2 → i = 2

Callback3 → i = 3




---

Step 4: Event loop executes callbacks

After ~1000ms, callbacks start running:

1. First callback → logs 1.


2. Second callback → logs 2.


3. Third callback → logs 3.



So final output:

1
2
3


---

✅ Summary of flow:

let creates a fresh i for each iteration.

Each setTimeout captures its own i.

When callbacks run after 1 second, they print 1 2 3 correctly. */
//************************************************************************************ */


/* Code:

for (var i = 1; i <= 3; i++) {
  (function(n) {
    setTimeout(() => console.log(n), 1000);
  })(i);
}


---

Step 1: Loop with var

var i is function scoped, not block scoped.

That means normally all iterations would share the same i.

But here, we are using an IIFE (Immediately Invoked Function Expression) which changes things.



---

Step 2: First iteration (i = 1)

(function(n) { ... })(i) runs immediately.

You pass i (which is 1) into the function as argument n.

Inside the IIFE, a new variable n = 1 is created.

Then setTimeout is scheduled with a callback:

() => console.log(n)

This callback closes over n, not i.

So this callback remembers n = 1.



---

Step 3: Second iteration (i = 2)

IIFE runs again with i = 2.

Inside this new execution, n = 2.

A second callback is scheduled, closing over n = 2.

This callback will always log 2.



---

Step 4: Third iteration (i = 3)

IIFE runs with i = 3.

Inside this execution, n = 3.

Third callback is scheduled, closing over n = 3.



---

Step 5: Loop ends

At this point:

The loop has finished with i = 4.

But we don’t care about i anymore because all the callbacks are bound to their own n copies created by IIFE.




---

Step 6: Event loop executes after ~1000ms

Callback1 logs n = 1.

Callback2 logs n = 2.

Callback3 logs n = 3.


Final output:

1
2
3


---

✅ Summary of flow:

With plain var, all callbacks would share the final i = 4.

The IIFE solves this by creating a new function scope per iteration, and capturing the current i as n.

Each callback now remembers its own n.

That’s why the output is 1, 2, 3.
*/

//***************************************************************************************** */

/*
Now with let, you often don’t need IIFE because let is block-scoped.


---

3. When do we use IIFE today?

To encapsulate code and avoid global pollution.

To create private variables.

To execute setup code once (e.g., initializing libraries, configs).

In older JS (before ES6), it was very common; now with let, const, and modules, IIFE is less needed but still useful in some patterns. */
