let age = 10;

if (age >= 18) {
    console.log("you are an adult");

}
else {
    console.log("you are a minor");
}


let isLoggedin = false;
let userRole = "Editor";

if (isLoggedin) {
    if (userRole === "Admin") {
        console.log("Admin you can do all the things");

    }
    else if (userRole === "Editor") {
        console.log("Welcome Editor- Edit access Granted");

    }
    else if (userRole === "Viewer") {
        console.log("Welcome Viewer - View access granted");

    }
    else {
        console.log("No idea you may be a guest user");
    }
}
else {
    console.log("you are not logged in");
}