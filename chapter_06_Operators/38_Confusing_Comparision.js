//===============================
// Confusing Comparison Cases
//===============================

// 1. Empty string vs 0
console.log("" == 0); // true -> "" coerced to Number -> 0
console.log("0" == 0); // true -> "0" coerced to Number -> 0
console.log("" === "0"); // false -> both strings, compared as-is

// === fixes it
console.log("" === 0); // false
console.log("0" === 0); // false
console.log("" === "0"); // false

// 2. null and undefined
console.log(null == undefined); // true -> special rule in ==
console.log(null === undefined); // false -> different types
console.log(null == 0); // false -> null only == undefined/null
console.log(null >= 0); // true -> >= coerces null to 0 (gotcha!)
console.log(null > 0); // false
console.log(null == 0 || null > 0); // false ... but null >= 0 is true

// 3. Booleans coerce to numbers
console.log(true == 1); // true
console.log(true === 1); // false
console.log(false == 0); // true
console.log(false === 0); // false
console.log(false == ""); // true
console.log(false == "0"); // true
console.log(true == "1"); // true
console.log(true === "1"); // false

// 4. Strings and numbers
console.log(5 == "5"); // true
console.log(5 === "5"); // false
console.log(1 == "1"); // true
console.log(1 === "1"); // false

// 4. NaN - never equal to anything, even itself
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
console.log(Number.isNaN(NaN)); // true

// 5. Object vs primitive
console.log([] == false); // true -> [] -> "" -> 0, false -> 0
console.log([] === 0); // false
console.log([] == ""); // true -> [] -> ""
console.log([] == false); // true -> [] -> 0, false -> 0
console.log([1] == true); // true -> [1] -> "1" -> 1
console.log([1, 2] == "1,2"); // true -> array toString
console.log({} == {}); // false -> different references
console.log([] == []); // false -> different references

// 6. String to number traps
console.log("" == 0); // true -> "" trimmed -> 0
console.log("\n\t" == 0); // true -> whitespace -> 0
console.log("0x10" == 16); // true -> hex string parsed
console.log("1e2" == 100); // true -> scientific notation

// 7. The infamous trio
console.log(null == false); // false -> surprise! null only == undefined
console.log(undefined == false); // false -> same here
console.log(undefined == 0); // false

// 8. typeof results (always strings)
console.log(typeof null); // "object" (legacy bug)
console.log(typeof undefined); // "undefined"
console.log(typeof NaN); // "number"
console.log(typeof null === "object"); // true
console.log(typeof undefined === "undefined"); // true

// 9. Object.is - strictest of all
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(+0, -0)); // false
console.log(+0 === -0); // true
console.log(0 === -0); // true

// 10. Quick interview cheats
// "" == 0 -> true
// "" == "0" -> false
// 0 == "0" -> true
// null == undefined -> true
// null == 0 -> false but null >= 0 -> true
// NaN == NaN -> false
// [] == ![] -> true (![] -> false; [] -> 0)
console.log([] == ![]); // true

// Summary
/*
== checks value after type coercion
=== checks value and type without coercion
Object.is() is even stricter than === for NaN and signed zero.

So prefer === in JavaScript to avoid confusing bugs.
*/
