# Learning Playwright

LearningPlaywright is a beginner-friendly repository with JavaScript examples and Playwright notes for learning and practice.

Latest updates (2026-08-22)

- README reorganized to follow the structure used in priyaayyanar/Learn_Playwright_2X.
- Cleaned chapter descriptions and fixed typos in the README text.

## Repository

- Owner: RoshaniPagare
- Repo: LearningPlaywright
- Primary language: JavaScript

## Structure

| Folder | Content |
|---|---|
| `chapter_01_Basics` | JavaScript basics and Playwright setup verification examples |
| `chapter_02_Javascript_Concepts` | JavaScript fundamentals: identifiers, comments, naming rules |
| `chapter_03_Identifier_Literals` | Identifiers, literals, and VS Code keyboard shortcuts (macOS & Windows) |
| `chapter_04_TypesOfVariables` | `var`, `let`, `const`, functions, hoisting, scope examples |
| `chapter_05_Literal` | Literals: numbers, strings, template literals, `null` vs `undefined` |
| `chapter_06_Operators` | Arithmetic, assignment, comparison, logical, and ternary operators |

## Topics Covered

### JavaScript Basics & Setup
- JavaScript basics and fundamentals
- Node.js setup and verification
- JavaScript console and output methods
- Running JavaScript files with Node.js

### Identifiers & Naming Conventions
- JavaScript identifier rules and naming conventions
- Identifier naming cases: camelCase, PascalCase, snake_case, SCREAMING_SNAKE_CASE, kebab-case, Train-Case, dot.case, Hungarian notation
- Reserved keywords and valid identifier names
- JavaScript comments (single-line and multi-line)
- VS Code keyboard shortcuts (Windows & Mac)

### Variables & Declaration
- `var`, `let`, `const` differences and best practices
- Variable declaration and initialization
- Global vs local scope
- Function scope (var)
- Block scope (let, const)
- Temporal Dead Zone (TDZ)
- Variable hoisting: var, let, const, and functions

### Hoisting & Scope
- Function hoisting and function expressions
- Variable hoisting mechanisms
- Scope concepts: global scope, function scope, block scope
- Nested scopes and scope chain
- Lexical environment and closure concepts

### Literals & Data Types
- JavaScript literals: numbers, strings, booleans, null, undefined
- Number literals: decimals, integers, exponentials, NaN, Infinity
- String literals: single quotes, double quotes, escape sequences
- Template literals and string interpolation
- Backtick (`) vs single (') vs double (") quotes
- `null` vs `undefined` differences
- Boolean literals: true and false

### Operators
- Arithmetic operators: `+`, `-`, `*`, `/`, `%`, `**` (exponentiation)
- Assignment operators: `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `**=`
- Compound operators and shorthand syntax
- Comparison operators: `==`, `!=`, `===`, `!==`, `<`, `>`, `<=`, `>=`
- Strict (`===`) vs loose (`==`) equality comparison
- Logical operators: `&&` (AND), `||` (OR), `!` (NOT)
- Ternary operator (conditional operator)
- Type operator (`typeof`)
- Increment and decrement operators: `++`, `--`
- Operator precedence and associativity

## What You'll Find

- **JavaScript fundamentals** with runnable example files
- **Detailed explanations** of identifier rules, literals, hoisting, and scope
- **Variable declaration techniques** with var, let, and const
- **Operator examples** covering arithmetic, logical, and comparison operations
- **VS Code keyboard shortcuts reference** for macOS and Windows
- **Practice examples** for each topic with clear, beginner-friendly code

## Getting Started / Installation

### Prerequisites

- Node.js (recommended >= 16)
- npm or yarn
- Optional: VS Code or any text editor

### Quick Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/RoshaniPagare/LearningPlaywright.git
   cd LearningPlaywright
   ```

2. **Install dependencies (if any):**

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. **If you add Playwright tests and want to run browsers:**

   ```bash
   npx playwright install
   ```

## How to Run Examples

### JavaScript Files

Run standalone JavaScript examples with Node.js:

```bash
node chapter_01_Basics/01_Basics.js
```

### Playwright Tests

```bash
npx playwright test
```

Run with UI mode:

```bash
npx playwright test --ui
```

Show test report:

```bash
npx playwright show-report
```

## Contributing

Contributions, issues, and feature requests are welcome! Please open an issue first to discuss major changes.

### Basic Workflow

1. Fork the repository
2. Create a branch for your change
3. Open a pull request with a clear description of your changes

## Notes

- This repository is intended for **learning and practice purposes**
- All examples are beginner-friendly and include explanations
- Code follows JavaScript best practices and conventions

## License

This repository currently does not include a LICENSE file. Add a LICENSE if you want to specify reuse terms.

## Author

- **Roshani Pagare**

---

### Future Enhancements

Consider adding:
- Fix small typos in filenames (for example: `23_null_vs_undeifned.js` -> `23_null_vs_undefined.js`)
- Add a LICENSE file (MIT/Apache/Other)
- Add package.json and Playwright configuration for runnable tests
- Expand chapters with loops, arrays, functions, and async concepts
- Add interactive examples and test cases
