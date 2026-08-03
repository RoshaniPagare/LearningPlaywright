// 1. BASIC NUMBER TYPES
let integer = 42                    // integer literal
let decimal = 3.14                  // decimal literal
let exponent = 1.2e3                // exponent notation: 1.2 × 10^3
let negativeExponent = 2e-3         // exponent notation: 2 × 10^-3

console.log("integer:", integer)
console.log("decimal:", decimal)
console.log("exponent:", exponent)
console.log("negativeExponent:", negativeExponent)

console.log("typeof integer:", typeof integer)                   // number
console.log("typeof decimal:", typeof decimal)                   // number
console.log("typeof exponent:", typeof exponent)                 // number
console.log("typeof negativeExponent:", typeof negativeExponent) // number

// -------------------------------------------------------------
// 2. RADIX NUMBER LITERALS
let hex = 0xFF                      // hexadecimal literal
let binary = 0b1010                 // binary literal
let octal = 0o17                    // octal literal

console.log("hex:", hex)
console.log("binary:", binary)
console.log("octal:", octal)

console.log("typeof hex:", typeof hex)                           // number
console.log("typeof binary:", typeof binary)                     // number
console.log("typeof octal:", typeof octal)                       // number

// -------------------------------------------------------------
// 3. NUMBER SEPARATORS
let largeNumber = 1_000_000         // numeric separator for readability
let fractionNumber = 123_456.789_012

console.log("largeNumber:", largeNumber)
console.log("fractionNumber:", fractionNumber)
console.log("typeof largeNumber:", typeof largeNumber)           // number
console.log("typeof fractionNumber:", typeof fractionNumber)     // number

// -------------------------------------------------------------
// 4. BIGINT
let bigInt = 123456789012345678901234567890n
let bigIntFromNumber = BigInt(9007199254740991)

console.log("bigInt:", bigInt)
console.log("typeof bigInt:", typeof bigInt)                     // bigint

// BigInt operations
// BigInt cannot be mixed with Number in arithmetic operations
// The following line would throw a TypeError if uncommented:
// console.log(bigInt + 1)

console.log("bigInt + 1n:", bigInt + 1n)                        // valid BigInt arithmetic
console.log("bigIntFromNumber:", bigIntFromNumber)
console.log("typeof bigIntFromNumber:", typeof bigIntFromNumber) // bigint

// -------------------------------------------------------------
// 5. SPECIAL NUMERIC VALUES
// Infinity
console.log("Infinity:", Infinity)                                // Infinity
console.log("1 / 0:", 1 / 0)                                      // Infinity
console.log("typeof Infinity:", typeof Infinity)                  // number

// -Infinity
console.log("-Infinity:", -Infinity)                              // -Infinity
console.log("typeof -Infinity:", typeof -Infinity)                // number

// NaN (Not a Number) - result of invalid math
console.log("NaN:", NaN)                                          // NaN
console.log("0 / 0:", 0 / 0)                                      // NaN
console.log("'hello' * 2:", 'hello' * 2)                          // NaN
console.log("typeof NaN:", typeof NaN)                            // number (quirky)

// -------------------------------------------------------------
// 6. NUMBER PROPERTIES (Constants)
console.log("\n--- Number Properties ---")
console.log("MAX_VALUE:", Number.MAX_VALUE)                        // ~1.79e308
console.log("MIN_VALUE:", Number.MIN_VALUE)                        // ~5e-324
console.log("MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER)          // 9007199254740991
console.log("MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER)          // -9007199254740991
console.log("POSITIVE_INFINITY:", Number.POSITIVE_INFINITY)        // Infinity
console.log("NEGATIVE_INFINITY:", Number.NEGATIVE_INFINITY)        // -Infinity
console.log("NaN property:", Number.NaN)                           // NaN
console.log("EPSILON:", Number.EPSILON)                            // smallest difference

// -------------------------------------------------------------
// SUMMARY TABLE
// Type / Example                     | Value / Comment
// -------------------------------------------------------------
// Integer                          | 42
// Decimal                          | 3.14
// Exponent                         | 1.2e3
// Hexadecimal                      | 0xFF
// Binary                           | 0b1010
// Octal                            | 0o17
// Numeric separator                | 1_000_000
// BigInt                           | 123456789012345678901234567890n
// Infinity                         | Infinity
// -Infinity                        | -Infinity
// NaN                              | NaN
// Number.MAX_VALUE                 | ~1.79e308
// Number.MIN_VALUE                 | ~5e-324
// Number.MAX_SAFE_INTEGER          | 9007199254740991
// Number.MIN_SAFE_INTEGER          | -9007199254740991
// Number.EPSILON                   | 2.220446049250313e-16
