console.log(null === 0);
console.log(null >= 0);

//nulish operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
let amul = null;
let milk_required = amul ?? "amul gold";
console.log(milk_required); // amul gold