var v = "Roshani";

let l = "10";

const c = "3.14";

var browser = "Chrome";
var browser = "Firefox"; // This will not throw an error because var allows redeclaration
browser = "Safari"; // This will not throw an error because var allows reassignment
console.log(browser); // Output: Safari


// for, function

var testCases = ["LogIn", "LogOut", "SignUp"]

for (var i = 0; i < testCases.length; i++) {
    console.log("Running test case: " + testCases[i]);
}
console.log("Loop counter leaked outside the loop: " + i);

