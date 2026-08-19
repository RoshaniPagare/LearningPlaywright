//&&-AND Gate
//|| - OR Gate

let a = true;
let b = false;

console.log(a && b);
console.log(a || b);
console.log(!a);
console.log(!b);
console.log(!a && b); //output will be false because !a is false and b is also false so false && false = false
console.log(!a || b); //output will be false because !a is false and b is also false so false || false = false
console.log(!a && !b); //output will be true because !a is false and !b is true so false && true = false 