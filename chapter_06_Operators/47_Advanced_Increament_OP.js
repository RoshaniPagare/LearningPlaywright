let a = 10;

console.log(++a + a); // 22
console.log(a); // 11


//it will give 24 beacause first it will increment the value of a to 12 and then it will add 12 + 12 = 24
console.log(++a + a++); // 24
console.log(a); // 13

console.log(a++ + ++a);
console.log(a); // 15

console.log(a++ + ++a);
console.log(a); // 15
