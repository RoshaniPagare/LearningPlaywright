let x = "global";

if (true) {
    //TDZ (Temporal Dead Zone) for blocked-scoped 'x' starts here, so we cannot access the variable 'x' until it is declared
    // console.log(x); // This will throw a ReferenceError because 'x' is in the Temporal Dead Zone (TDZ) until it is declared
    let x = "local"; // TDZ ENDS here, so we can now access the variable 'x' without any errors
    console.log(x); // Output: local
}

console.log(x); // Output: global