console.log(score);
let score = 100; // This will throw a ReferenceError because 'score' is in the Temporal Dead Zone (TDZ) until it is declared
//ReferenceError: Cannot access 'score' before initialization
typeof score; // This will also throw a ReferenceError because 'score' is in the TDZ
//TDZ is ends here, so we can now access the variable 'score' without any errors
let score = 100; //declaration of score variable
console.log(score); 