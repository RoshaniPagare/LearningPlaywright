function getUserStatus() {
    console.log(status_code);

    //var is function scoped, so it is hoisted to the top of the function getUserStatus, not global scope. 
    // It is initialized to undefined at the start of the function execution.
    // Therefore, the first console.log prints undefined.
    var status_code = "Active";
    console.log(status_code);
}
getUserStatus();