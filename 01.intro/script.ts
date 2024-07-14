let myName = "shahwaiz"; // jis data-type ka hum ne variable bana dia usko hum ussi data-type me change kar sakte hain 
console.log(myName);

// myName = 123; // error ayega typescript me hum reassign krte howe data type ko change nahi kar sakte

myName = "qasim";
console.log(myName);


let abc:string; // aese hum variable me data-type bi define kar sakte hain
abc = "Ali";
console.log(abc);

let a = Number(prompt("First Number"));
let b = Number(prompt("Second Number"));
let result = a + b;
// console.log(result);


let userName = prompt("Enter your Name");
if (userName === "") {
    console.log("Enter your name");
}else{
    console.log('UserName', userName?.toUpperCase());
}
 
let num:number;
num = 9
// console.log(num);



