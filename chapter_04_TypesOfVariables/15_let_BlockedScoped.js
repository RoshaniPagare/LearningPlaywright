// let is block scoped - it is only accessible within the block where it is declared

// global scope, Output: 10
let a = 10;


function printHello() {
    console.log("Hello TheTestingAcademy");

    // let a is scoped to the function block
    let a = 20; // This 'a' is scoped to the function
    console.log(a); // Output: 20

    // let inside if block creates a separate block scope
    if (true) {
        // let a inside if block is block-scoped, different from function-level let a
        let a = 30; // This 'a' is scoped to the if block only
        console.log("F->", a); // Output: 30
    }

    // After the if block, let a reverts to function-level value (20)
    // This outputs 20 because let creates block scope, inner let a doesn't affect outer
    console.log("F->", a); // Output: 20    
}
// This outputs the global let a (10), different from function's let a
console.log("G->", a);
printHello();