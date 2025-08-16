///for in loop (to iterate over array ,string,and object )

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`)
    /*op-->js shortcut is for javascript
    cpp shortcut is for C++
    rb shortcut is for ruby
    swift shortcut is for swift by apple */

    //console.log(myObject[key])
    /*op-->javascript
         C++
        ruby
        swift by apple */

    //console.log(key)
    /*op-->js
    cpp
    rb
    swift */
}

//****************************************************************************************** */
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
    /*op-->js
            rb
            py
            java
            cpp */
    //console.log(key)
    /*op-->
    0
    1
    2
    3
    4 */
}
//******************************************************************************************88 */


 const map = new Map()
 map.set('IN', "India")
 map.set('USA', "United States of America")
 map.set('Fr', "France")
 map.set('IN', "India")

 for (const key in map) {
     console.log(key);
 }//op--> kuch nhi ata kyuki map iteratable nhi hein for in loop ke through 

 