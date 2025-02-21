// 1) Union_Types: batate hain ke variable ke multiple types ho sakte hain.
// 2) Narrowing_Types: un union types ko check karke ek specific type mein convert karta hai.

let arr2: number[] = [2, 5, 8, 9];

// arr2.push("shaha") // error

arr2.push(23);

// array ki data type string hogi ya number is ky elawa koi or data-type hogi tw error ayega
let arr: (string | number)[] = [2, 4, '3']

if (true) {
  let z = 4;
  //use z
  console.log(z.toFixed(2));
} else {
  let z = "string";
  //use z
  console.log(z.toUpperCase());
}
//   console.log("let: " + z); // Error: z is not defined in this scope


// union types
let test: number | string;
test = 'shahwaiz';
test = 10;
// test = true // error


// object literal 

let myObj = {
  name: "Shahwaiz",
  age: 20,
  course: 'web and mobile app development',
  hobbies: [2, 4, 6, 8]
}

myObj.name = "Something"; // OK
// myObj.name = 22; // error

console.log(myObj.age);
console.log(myObj.hobbies[0]);


// narrowing 
let myAge: string | number;
myAge = "shahwaiz";
console.log(myAge.toUpperCase());
myAge = 19
console.log(myAge.toFixed(1));


let newAge = Math.random() > 0.6 ? "Khan" : 79;

// if (newAge === "Khan") {
//     console.log(newAge.toUpperCase()); 
// }else{
//     console.log(newAge);
// }

if (typeof newAge === "string") {
  console.log(newAge.toUpperCase());
} else {
  console.log(newAge.toFixed(1));

}



let position: 1 | 2 | 3;
// position = 4 // error
// position = 2


type progressType = string | number | boolean;
let progress: progressType;

progress = "ShahwaizQasim";
console.log(progress);

progress = 12345;
console.log(progress);

progress = true;
console.log(progress);

// progress = null; // error


type ArrayType = string | number | boolean;

let userInformation : ArrayType;

userInformation = "Shahwaiz";
console.log("userInformation", userInformation);

userInformation = true;
console.log("userInformation", userInformation);

// userInformation = null; // error
// console.log("userInformation", userInformation);

userInformation = 33 
console.log("userInformation", userInformation);



