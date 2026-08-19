
//LOOSE_COMPARISION

/* Loose comparison operators are used to compare values and determine their relationship,
but they do not check for the type of the values being compared. They are used to compare values 
and determine their relationship without considering the data type of the values being compared.*/
//it checks value only after converting the data type of the values being compared to a common type.

//loose comparison operators are as follows:
// 1. Equal to (==)
// 2. Not equal to (!=)

//Example:
let l = 40;
let m = "40";

console.log(l == m);

console.log(l != m);

//loose comaprision

console.log(0 == "") //it will return true because it will convert the empty string to number 0 and then compare it with 0 so it will return true

console.log(true == 1); //it will return true because it will convert the boolean true to number 1 and then compare it with 1 so it will return true
console.log(true == "1"); //it will return true because it will convert the boolean true to number 1 and then compare it with 1 so it will return true
console.log(0 == true) //it will return false because it will convert the boolean true to number 1 and then compare it with 0 so it will return false
console.log(true == 2); //it will return false because it will convert the boolean true to number 1 and then compare it with 2 so it will return false
console.log(2 == true); //it will return false because it will convert the boolean true to number 1 and then compare it with 2 so it will return false

console.log(0 == false); //it will return true because it will convert the false to number 0 and then compare it with 0 so it will return true
console.log(false == 0); //it will return true because it will convert the false to number 0 and then compare it with 0 so it will return true
console.log(null == undefined); //it will return true because null and undefined are considered equal in loose comparison
console.log(null == 0); //it will return false because null is only equal to undefined in loose comparison
console.log(1 == "1"); //it will return true because it will convert the string "1" to number 1 and then compare it with 1 so it will return true

