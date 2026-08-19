console.log(0 == "0");
console.log("" == 0);


//transitivity broken because both are strings but one is empty and other is not so it does not convert hence, it will return false
console.log("" == "0");


console.log(null == 0); //it will return false because null is only equal to undefined in loose comparison

console.log("5" != 5); //false because it will convert string to number and then compare and in loose comparison it will return true but since we are using != it will return false

console.log("5" !== 5); //true because it will not convert string to number and since both are different types it will return true