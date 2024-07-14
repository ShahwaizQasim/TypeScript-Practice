var myName = "shahwaiz"; // jis data-type ka hum ne variable bana dia usko hum ussi data-type me change kar sakte hain 
console.log(myName);
// myName = 123; // error ayega typescript me hum reassign krte howe data type ko change nahi kar sakte
myName = "qasim";
console.log(myName);
var abc; // aese hum variable me data-type bi define kar sakte hain
abc = "Ali";
console.log(abc);
var a = Number(prompt("First Number"));
var b = Number(prompt("Second Number"));
var result = a + b;
// console.log(result);
var userName = prompt("Enter your Name");
if (userName === "") {
    console.log("Enter your name");
}
else {
    console.log('UserName', userName === null || userName === void 0 ? void 0 : userName.toUpperCase());
}
var num;
num = 9;
console.log(num);
