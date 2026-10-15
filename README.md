# Learning Playwright

LearningPlaywright is a beginner-friendly repository for learning JavaScript fundamentals and exploring Playwright concepts with practical examples.

Latest updates (2026-10-15)

- Updated the repository structure to match the current folders in the project.
- Added the `chapter_07_if_else` chapter and the `Tasks` folder to the documentation.
- Refined the README to better reflect the actual learning path and project layout.

## Repository

- Owner: RoshaniPagare
- Repo: LearningPlaywright
- Primary language: JavaScript

## Structure

| Folder | Content |
|---|---|
| `Tasks` | Practice tasks and exercise-based learning files |
| `chapter_01_Basics` | JavaScript basics and setup verification examples |
| `chapter_02_Javascript_Concepts` | JavaScript fundamentals, syntax, and concept explanations |
| `chapter_03_Identifier_Literals` | Identifiers, literals, and editor shortcuts |
| `chapter_04_TypesOfVariables` | `var`, `let`, `const`, scope, hoisting, and function basics |
| `chapter_05_Literal` | Literal types, values, and data concepts |
| `chapter_06_Operators` | Arithmetic, assignment, comparison, logical, and ternary operators |
| `chapter_07_if_else` | Conditional statements and decision-making examples |
| `README.md` | Project overview and onboarding guide |

## Topics Covered

### JavaScript Basics & Setup
- JavaScript basics and fundamentals
- Node.js setup and verification
- JavaScript console and output methods
- Running JavaScript files with Node.js

### Identifiers & Naming Conventions
- JavaScript identifier rules and naming conventions
- Identifier naming styles: camelCase, PascalCase, snake_case, SCREAMING_SNAKE_CASE, kebab-case, Train-Case, dot.case, and Hungarian notation
- Reserved keywords and valid identifiers
- JavaScript comments (single-line and multi-line)
- VS Code shortcuts for Windows and macOS

### Variables & Declaration
- `var`, `let`, and `const` differences
- Variable declaration and initialization
- Global vs local scope
- Function scope and block scope
- Temporal Dead Zone (TDZ)
- Hoisting behavior for variables and functions

### Hoisting & Scope
- Function hoisting and function expressions
- Variable hoisting mechanisms
- Global, function, and block scope
- Nested scopes and scope chain
- Lexical environment and closure concepts

### Literals & Data Types
- JavaScript literals: numbers, strings, booleans, `null`, and `undefined`
- Number literals, exponentials, `NaN`, and `Infinity`
- String literals and escape sequences
- Template literals and interpolation
- `null` vs `undefined`
- Boolean literals: `true` and `false`

### Operators
- Arithmetic operators: `+`, `-`, `*`, `/`, `%`, `**`
- Assignment operators: `=`, `+=`, `-=`, `*=`, `/=`, `%=`
- Comparison operators: `==`, `!=`, `===`, `!==`, `<`, `>`, `<=`, `>=`
- Logical operators: `&&`, `||`, `!`
- Ternary operator
- `typeof` operator
- Increment and decrement operators: `++`, `--`
- Operator precedence and associativity

### Conditional Logic
- `if`, `else if`, and `else` statements
- Comparison-based branching
- Real-world decision-making examples in JavaScript

## What You'll Find

- JavaScript fundamentals with runnable example files
- Beginner-friendly explanations for core programming concepts
- Variable declaration examples with `var`, `let`, and `const`
- Operator examples covering arithmetic, logical, and comparison operations
- Practice exercises and task files for hands-on learning
- VS Code references and beginner notes for JavaScript development

## Getting Started / Installation

### Prerequisites

- Node.js (recommended >= 16)
- npm or yarn
- Optional: VS Code or any text editor

### Quick Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/RoshaniPagare/LearningPlaywright.git
   cd LearningPlaywright
   ```

2. Install dependencies (if any):

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. If you add Playwright tests and want to run browsers:

   ```bash
   npx playwright install
   ```

## How to Run Examples

### JavaScript Files

Run standalone JavaScript examples with Node.js:

```bash
node chapter_01_Basics/01_Basics.js
```

Example usage for other chapters:

```bash
node chapter_06_Operators/06_Operators.js
```

### Playwright Tests

```bash
npx playwright test
```

Run with UI mode:

```bash
npx playwright test --ui
```

Show the test report:

```bash
npx playwright show-report
```

## Contributing

Contributions, issues, and feature requests are welcome. Please open an issue first to discuss major changes.

### Basic Workflow

1. Fork the repository
2. Create a branch for your change
3. Open a pull request with a clear description of your changes

## Notes

- This repository is intended for learning and practice purposes.
- Examples are beginner-friendly and include explanations.
- Code follows JavaScript best practices and conventions.
- The project continues to expand with additional JavaScript topics and practical exercises.

## License

This repository currently does not include a LICENSE file. Add a LICENSE if you want to specify reuse terms.

## Author

- Roshani Pagare

---

### Future Enhancements

Consider adding:
- Small fixes for filenames or inconsistencies across chapters
- A LICENSE file (MIT/Apache/Other)
- package.json and Playwright configuration for runnable tests
- More chapters on arrays, loops, functions, and async JavaScript
- Additional practice tasks and interactive examples
