// Step 1: Creation phase (memory setup).
// The engine scans the whole program before executing anything.
// It sees the declaration `var greeting` and creates a binding for `greeting`.
// During this phase, `greeting` is initialized to `undefined`.
// Step 2: Execution phase.
// Now it executes statements top to bottom.
// `console.log(greeting)` runs first and prints `undefined`.
// Then the assignment `greeting = "Hello, world!"` runs.
// After that, the second `console.log(greeting)` prints the assigned string.
console.log(greeting);
var greeting = "Hello, world!";
console.log(greeting);
