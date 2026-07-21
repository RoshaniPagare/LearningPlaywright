// JavaScript identifier rules examples in one combined script

// 1. Must begin with a letter, underscore (_), or dollar sign ($)
var dollar = 10;
console.log(dollar);

var _underscore = 20;
console.log(_underscore);

var a = 30;
console.log(a);

// 2. Subsequent characters can also be digits (0-9)
var a1 = 40;
console.log(a1);

var _2 = 50;
console.log(_2);

var $3 = 60;
console.log($3);

// 3. Cannot start with a digit
// var 1a = 70; // invalid identifier
// console.log(1a);

// 4. Cannot use reserved keywords
// var var = 80; // invalid identifier
// var if = 90; // invalid identifier

// 5. Case-sensitive identifiers
var myVar = 100;
console.log(myVar);

var MyVar = 110;
console.log(MyVar);

// 6. May contain Unicode characters or unicode escape sequences
var café = 120;
console.log(café);

var \u0061pple = 130;
console.log(\u0061pple);

// 7. Cannot use spaces or most special characters
// var my var = 140; // invalid identifier
// var my-var = 150; // invalid identifier

// 8. Valid use of underscore and dollar sign in identifiers
var Roshani_Pagare = 100;
var Roshani$Pagare = 200;
console.log(Roshani_Pagare);
console.log(Roshani$Pagare);
