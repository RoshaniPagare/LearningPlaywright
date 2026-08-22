let rajkumar_age = 18;
let RJ_will_vote = rajkumar_age > 18 ? "Yes, RJ can Vote" : "No RJ can't Vote";
console.log(RJ_will_vote);



let actualStatusCode = 200;
let ExpectedStatusCode = 200;
let result = actualStatusCode === ExpectedStatusCode ? "PASS" : "FAIL";
console.log(result); // PASS


let environment = "staging";

let base_url = environment === "prod" ?
    "https://api.example.com"
    : "https://staging-api.example.com"

console.log(base_url);


let isCI = true;
let browserMode = isCI ? "headless" : "headed"
console.log(browserMode);


let resopnseTime = 850;
let sla = 1000;
let slaStatus = resopnseTime <= sla ? "Within SLA" : "SLA Breached"
console.log(`Response : ${resopnseTime}ms- ${slaStatus}`);


//Nested Ternary Operator
let is_Roshani_age = 22;
let is_Roshani_Drink = is_Roshani_age > 20 ? (is_Roshani_age > 25 ? "Yes,Roshani can Drink" : "No, Roshani can't Drink") : "No Roshani Can't go to Goa";
console.log(is_Roshani_Drink); // No Roshani Can't go to Goa


let StatusCode = 404;
let Category = StatusCode < 300 ? "Pass" :
    StatusCode < 400 ? "Redirect" :
        StatusCode < 500 ? "Client Error" : "Server Error";
console.log(`Status ${StatusCode} : ${Category}`); // Client Error

//this will add 5 to the value of a and assign the result back to a. So, a will become 15.
let a = 10;
a += 5;
console.log(a);



a = 20;

a = +10;   //this will overwrite the value of a with 10. So, a will become 10.
console.log(a); // 10
