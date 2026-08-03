// 23_null_undeifned.js
// Difference between null and undefined in JavaScript

// undefined means a value has not been assigned yet.
let a;
console.log(a); // undefined

// null means a variable has been explicitly set to "no value".
let b = null;
console.log(b); // null

// Common differences:
// 1. undefined is automatic when a variable is declared but not initialized.
// 2. null is set intentionally by the programmer.
// 3. typeof undefined is "undefined".
// 4. typeof null is "object" (this is a known JavaScript quirk).

console.log(typeof a); // "undefined"
console.log(typeof b); // "object"

// Use undefined when a variable has not been given a value yet.
// Use null when you want to clear a variable or show that it has no value.

// Example:
function getUser(id) {
  if (id === 0) {
    return null; // user not found
  }
  return { id, name: "Alice" };
}

console.log(getUser(0)); // null
console.log(getUser(1)); // { id: 1, name: "Alice" }
