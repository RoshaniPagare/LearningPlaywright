// let is block scoped - it is only accessible within the block where it is declared
let a = 10;

let retryCount = 0;
retryCount = retryCount + 1;

console.log("Retry Attempt:", retryCount);
//retryCount' has already been declared with 'let'
//SyntaxError: Identifier 'retryCount' has already been declared
//let retryCount = 0; // This will throw an error because 'retryCount' has already been declared with 'let'

let testStatus = "Pending";

if (testStatus === "Pending") {
    let executionTime = 1200;
    console.log("Inside Block:", executionTime);
}