// Union_Types: batate hain ke variable ke multiple types ho sakte hain.
// Narrowing_Types: un union types ko check karke ek specific type mein convert karta hai.
var arr2 = [2, 5, 8, 9];
// arr2.push("shaha") // error
arr2.push(23);
// array ki data type string hogi ya number is ky elawa koi or data-type hogi tw error ayega
var arr = [2, 4, '3'];
if (true) {
    var z = 4;
    //use z
    console.log(z.toFixed(2));
}
else {
    var z = "string";
    //use z
    console.log(z.toUpperCase());
}
//   console.log("let: " + z); // Error: z is not defined in this scope
// union types
var test;
test = 'shahwaiz';
test = 10;
// test = true // error
// object literal 
var myObj = {
    name: "Shahwaiz",
    age: 20,
    course: 'web and mobile app development',
    hobbies: [2, 4, 6, 8]
};
myObj.name = "Something"; // OK
// myObj.name = 22; // error
console.log(myObj.age);
console.log(myObj.hobbies[0]);
// narrowing 
var myAge;
myAge = "shahwaiz";
console.log(myAge.toUpperCase());
myAge = 19;
console.log(myAge.toFixed(1));
var newAge = Math.random() > 0.6 ? "Khan" : 79;
// if (newAge === "Khan") {
//     console.log(newAge.toUpperCase()); 
// }else{
//     console.log(newAge);
// }
if (typeof newAge === "string") {
    console.log(newAge.toUpperCase());
}
else {
    console.log(newAge.toFixed(1));
}
var position;
var progress;
progress = "ShahwaizQasim";
console.log(progress);
progress = 12345;
console.log(progress);
progress = true;
console.log(progress);
var userInformation;
userInformation = "Shahwaiz";
console.log("userInformation", userInformation);
userInformation = true;
console.log("userInformation", userInformation);
// userInformation = null;
// console.log("userInformation", userInformation);
userInformation = 33;
console.log("userInformation", userInformation);
// let myArr: ArrayType[] = ['2', 4, true, null, undefined];
// console.log("Array=>", myArr);
