//Maximum number between two numbers, using the ternary operator 

let a = 20;
let b = 30;
let maximum_num = a > b ? `maximum number is ${a}` : `maximum number is ${b}`
console.log(maximum_num);



//Maximum number between three numbers, using the ternary operator 
let x = 10;
let y = 20;
let z = 7000;
let max_num = x > y ? `maximum number is ${x}` :
    y > z ? `maximum number is ${y}` :
        z > x ? `maximum number is ${z}` : `maximum number is ${x}`

console.log(max_num);  
