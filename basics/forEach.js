// forEach loop(in built loop)
//syntax--> objectvar_name.forEach( funtion call back )
//function call back doesnt have function name
//function call back--->objectvar_name.forEach( function (objectvar_name ka values as a parameters){} )

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){
     //console.log(val);
} )/*op-->js
    ruby
    java
    python
    cpp */
//---------------------------------------------------------------------------------------------
 coding.forEach( (item) => {
    //console.log(item);
 } )/*op->js
    ruby
    java
    python
    cpp */
//------------------------------------------------------------------------------------------------


function printMe(item){
    console.log(item);
} 
//printMe()//op-->undefined because item kis context mein use kar rahe hein woh nhi pata humey aur woh kiska part hein woh nhi pata
//printMe(coding)//op-->[ 'js', 'ruby', 'java', 'python', 'cpp' ] sidha sidha array hi print ho ja raha hein
//printMe(coding.items)//op-->undefined bcoz hum items ko out of scope use kar rahe hein
//printMe(coding.key)//op-->undefined bcoz hum key ko out of scope use kar rahe hein
//printMe(coding.keys)//op-->[Function: keys]

//coding.forEach(printMe) //basically this statement is saying apply prinMe funtion on each value of array coding
/*op-->
js
ruby
java
python
cpp */

//--------------------------------------------------------------------------------
 coding.forEach( (item, index, arr)=> {
     //console.log(item, index, arr);
 } )
 /*op-->js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ] */


//-----------------------------------------------------------------------------------------

const myCoding = [
    {                                   //object1
        languageName: "javascript",
        languageFileName: "js"
    },
    {                                  //object2
        languageName: "java",
        languageFileName: "java"
    },
    {                                  //object3
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )
/*op--->javascript
java
python */

myCoding.forEach( (item) => {
    console.log(item);
} )
/*op-->{ languageName: 'javascript', languageFileName: 'js' }
{ languageName: 'java', languageFileName: 'java' }
{ languageName: 'python', languageFileName: 'py' } */ //here item refers to an object in array