"use strict";
const shahwaiz = {
    name: "Shahwaiz",
    age: 20,
    hobbies: [2, 3, '5', 6],
    test: true,
    // color: white // error beacause student type me color nhi hai 
};
// console.log(typeof shahwaiz.hobbies[2]);
// console.log(typeof shahwaiz.hobbies[2]);
for (const key in shahwaiz) {
    // console.log(key);
    if (key === "age") {
        break;
    }
}
const azain = {
    name: "Azain",
    age: 17,
    hobbies: ['cricket', 'reading', 2, 4, 5]
};
//union data-type
// console.log(azain.test);// test? => boolean | undefined
// console.log(azain.hobbies[1]);
// console.log(azain.age);
// let arr:string[] = [1,'1'] // error
let arr2 = [1, '1']; // agr hum aesi array me value dengy tw usko by default data-types mil jaengi 
console.log(arr2);
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 7));
