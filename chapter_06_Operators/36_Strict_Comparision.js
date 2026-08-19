//strict comaprision

/* 
strict comparison operators are used to compare values and determine their relationship, 
but they also check for the type of the values being compared. They are used to compare values 
and determine their relationship while considering the data type of the values being compared.
*/
//strict comparison operators are as follows:
// 1. Strict equal to (===)
// 2. Strict not equal to (!==)

//Example:
let c = 10;
let d = "10";

// Using the strict equality operator (===)
console.log(c === d); // Output: false

// Using the strict inequality operator (!==)
console.log(c !== d); // Output: true  
console.log(0 === ""); //it will return false because it will not convert the empty string to number 0 and then compare it with 0 so it will return false

console.log(true === 1); //it will return false because it will not convert the boolean true to number 1 and then compare it with 1 so it will return false
console.log(true === "1"); //it will return false because it will not convert the boolean true to number 1 and then compare it with 1 so it will return false
console.log(0 === true) //it will return false because it will not convert the boolean true to number 1 and then compare it with 0 so it will return false
console.log(true === 2); //it will return false because it will not  convert the boolean true to number 1 and then compare it with 2 so it will return false
console.log(2 === true); //it will return false because it will not convert the boolean true to number 1 and then compare it with 2 so it will return false


console.log(0 === false); //it will return false because it will not convert the false to number 0 and then compare it with 0 so it will return false
console.log(false === 0); //it will return false because it will not convert the false to number 0 and then compare it with 0 so it will return false
console.log(null === undefined) //it will return false because null and undefined are not considered equal in strict comparison


console.log(1 === "1"); //it will return false because it will not convert the string "1" to number 1 and then compare it with 1 so it will return false
console.log(1 === 1); //it will return true because both are of same type and value so it will return true