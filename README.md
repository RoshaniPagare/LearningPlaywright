# Learning Playwright

A beginner-friendly repository with JavaScript examples and Playwright notes for learning and practice.

Latest updates (2026-08-22)

- README updated to exactly reflect repository contents and current date.
- Cleaned chapter descriptions and fixed typos.

Repository overview

- Owner: RoshaniPagare
- Repo: LearningPlaywright
- Primary language: JavaScript

Contents

This repository is organized into numbered chapters covering JavaScript fundamentals, identifiers, literals, variable types, and operators. Each chapter contains example files you can open and run locally.

Chapters

- Chapter 01: Basics
  - chapter_01_Basics/01_Basics.js
  - chapter_01_Basics/02_JS.js
  - chapter_01_Basics/03_JS_Verify_Setup.js
  - chapter_01_Basics/04_HotCode.js

- Chapter 02: JavaScript Concepts
  - chapter_02_Javascript_Concepts/05_JS_Basics.js
  - chapter_02_Javascript_Concepts/06_Identifier_Rules.js
  - chapter_02_Javascript_Concepts/07_Identifier_Names_Part2.js
  - chapter_02_Javascript_Concepts/08_JS_Comments.js

- Chapter 03: Identifier Literals and VS Code shortcuts
  - chapter_03_Identifier_Literals/VS_Code_Keyboardshortcut_mac.md
  - chapter_03_Identifier_Literals/VS_Code_Keyboardshortcut_windows.md

- Chapter 04: Types Of Variables
  - chapter_04_TypesOfVariables/09_var_let_const.js
  - chapter_04_TypesOfVariables/10_Functions.js
  - chapter_04_TypesOfVariables/11_Var_Explained.js
  - chapter_04_TypesOfVariables/12_let_variable_type.js
  - chapter_04_TypesOfVariables/13_const.js
  - chapter_04_TypesOfVariables/14_Var_FunctionScoped.js
  - chapter_04_TypesOfVariables/15_let_BlockedScoped.js
  - chapter_04_TypesOfVariables/16_Hoisting.js
  - chapter_04_TypesOfVariables/17_Hoisting_function.js
  - chapter_04_TypesOfVariables/18_let_Hoisting_TDZ.js
  - chapter_04_TypesOfVariables/19_let_hoisting_TDZ_block.js
  - chapter_04_TypesOfVariables/20_const_hoisting.js

- Chapter 05: Literal
  - chapter_05_Literal/22_Literal.js
  - chapter_05_Literal/23_null_vs_undeifned.js
  - chapter_05_Literal/24_Literal_all.js
  - chapter_05_Literal/25_Literal_Number_all.js
  - chapter_05_Literal/26_String.js
  - chapter_05_Literal/27_template_literal.js
  - chapter_05_Literal/28_Backtick_single_double.js

- Chapter 06: Operators
  - chapter_06_Operators/29_AssignementOperator.js
  - chapter_06_Operators/30_Arithmetic_Operator.js
  - chapter_06_Operators/31_modulus.js
  - chapter_06_Operators/32_exponential_Operator.js
  - chapter_06_Operators/33_IQ_Compound_Operators.js
  - chapter_06_Operators/34_Comparision_Operators.js
  - chapter_06_Operators/35_Loose_Comparision.js
  - chapter_06_Operators/36_Strict_Comparision.js
  - chapter_06_Operators/37_IQ_Loose_Strict.js
  - chapter_06_Operators/38_Confusing_Comparision.js
  - chapter_06_Operators/39_Logical_Operators.js
  - chapter_06_Operators/40_String_Operator.js
  - chapter_06_Operators/41_Ternary_Operator.js

What you'll find

- JavaScript fundamentals with runnable example files.
- Notes on identifier rules, literals, hoisting, scope, and operators.
- VS Code keyboard shortcuts reference files for macOS and Windows.

Getting started / Installation

Prerequisites:

- Node.js (recommended >= 16)
- npm or yarn

Quick setup:

1. Clone the repo:

   git clone https://github.com/RoshaniPagare/LearningPlaywright.git
2. Install dependencies (if any):

   npm install

   or

   yarn install
3. If you add Playwright tests and want to run browsers:

   npx playwright install

How to run examples

- Most files are standalone JavaScript examples. Run them with node:

  node chapter_01_Basics/01_Basics.js

- If you add Playwright tests, run Playwright test runner:

  npx playwright test

Contributing

Contributions, issues, and feature requests are welcome. Please open an issue first to discuss major changes.

Basic workflow:

1. Fork the repository
2. Create a branch for your change
3. Open a pull request with a clear description of your changes

Notes

- This repository is intended for learning and practice purposes.

License

- This repository currently does not include a LICENSE file. Add a LICENSE if you want to specify reuse terms.

If you'd like, I can also:

- Fix the small typos in filenames (for example: `23_null_vs_undeifned.js` -> `23_null_vs_undefined.js`) and update README links accordingly.
- Add a LICENSE file (MIT/Apache/Other).
- Add package.json and Playwright configuration if you want runnable tests.
