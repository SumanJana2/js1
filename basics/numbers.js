//const score = 400
// console.log(score);//primitive form //op-->400

//const balance = new Number(100) //Number ka object banaya hein (object of number) 
// console.log(balance);//op--> Number:100

// console.log(balance.toString().length);// to string conversion 
// console.log(balance.toFixed(1)); // decimal ke baad ek hi number hi dikhayega 

//const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4)); //number ko convert karkey 4 number mein value dega eg:123.9
//op-->124 if toPrecision is 3 //op 1.23e+9 --> if precision is 2

//const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));
// //indian system ke hisaab se numbers mein column lagayengey

// +++++++++++++ Maths +++++++++++++++++++++++++++++
/*
console.log(Math);///op--> object  --> Maths{}
console.log(Math.abs(-4)); //op-->4,,negative to postive
console.log(Math.round(4.6));//op-->5,,true value 4.5> -->5
console.log(Math.ceil(4.2));//op-->5 ("upper bound")
console.log(Math.floor(4.9));//op -->4(lower bound)
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));
*/
//console.log(Math.random());//randome value btw 0 and 1
//console.log((Math.random()*10) + 1);//*10 beacuse
//  value will be bet 0 &1 i want value between 1 and 10 
// +1 because math.random may generate 0 value  
//console.log(Math.floor(Math.random()*10) + 1);//floor se round of karna (lower bound)

//const min = 10
//const max = 20

/*******console.log(Math.floor(Math.random() * (max - min + 1)) + min)//value between 10 and 20 ********/
//console.log(Math.random()) //bracketr ke andar agar koi bhi value 
// daal de ussey bhi farak nhi padhta value to 0 aur 1 ke bich mein ayegi