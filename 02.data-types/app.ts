console.log('testing');

console.log('testing2');

let arr2: number[] = [2,5,8,9];

// arr2.push("shaha") // error

arr2.push(23); 


let arr: (string | number)[] = [2,4,'3'] // array ki data type string hogi ya number is ky elawa koi or data type put krenge tw error ayega


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



let test: number| string; // union
test = 'shahwaiz';
test = 10;
// test = true // error


// object literal 

let myObj = {
    name: "Shahwaiz",
    age: 20,
    course: 'web and mobile app development',
    hobbies:[2,4,6,8]
}
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
}else{
     console.log(newAge.toFixed(1));
     
}



let position : 1 | 2 | 3;
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




