//var is function scoped and can be re-declared and updated

// global scope, Output: 10
var a = 10;



function printHello() {
    console.log("Hello TheTestingAcademy");
    var a = 20; // This 'a' is scoped to the function
    console.log(a); // Output: 20
    if (true) {
        var a = 30; // This 'a' is still scoped to the function, not the block
        console.log(a);
    }
    console.log("F->", a); // Output: 30
}
console.log("G->", a);
printHello();