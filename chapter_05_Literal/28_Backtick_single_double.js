// =============================================================
// Topic: Single Quote vs Double Quote vs Backtick in JS
// File: 28_Backtick_single_double.js
// =============================================================

/*
ONE SIMPLE EXPLANATION:

Single ('') and Double ("") quotes are almost the same.
Both create plain string literals.
Backticks (`) are special — they allow interpolation with ${}
and multi-line text too.
*/

// -------------------------------------------------------------
// 1. Single Quotes
// -------------------------------------------------------------
let single = 'Hello World'
console.log('Single Quote:', single)

// -------------------------------------------------------------
// 2. Double Quotes
// -------------------------------------------------------------
let double = "Hello World"
console.log('Double Quote:', double)

// NOTE: Single and Double are identical in behavior.
// Use whichever you prefer, just be consistent.

// -------------------------------------------------------------
// 3. Backticks (Template Literals)
// -------------------------------------------------------------
let name = 'Roshani'
let age = 25

// Variable interpolation inside ${}
let backtick = `Hello, my name is ${name} and I am ${age} years old.`
console.log('Backtick with variable:', backtick)

// Expression inside ${}
let sum = `10 + 20 = ${10 + 20}`
console.log('Backtick with expression:', sum)

// Multi-line string with backticks
let multiline = `
Line 1
Line 2
Line 3
`
console.log('Backtick multi-line:', multiline)

// -------------------------------------------------------------
// 4. Quick Comparison
// -------------------------------------------------------------
/*
Feature               | '' or "" | ``
----------------------|-----------|--------------------
Simple text           | ✓         | ✓
Variable injection    | ✗         | ✓ -> ${var}
Multi-line            | ✗         | ✓
Expression inside     | ✗         | ✓ -> ${a + b}
*/

// -------------------------------------------------------------
// 5. Real Example
// -------------------------------------------------------------
let product = "Laptop"
let price = 50000

// Old way (using + to combine)
let oldWay = "The " + product + " costs " + price + " rupees."

// New way (using backticks)
let newWay = `The ${product} costs ${price} rupees.`

console.log('Old way:', oldWay)
console.log('New way:', newWay)
