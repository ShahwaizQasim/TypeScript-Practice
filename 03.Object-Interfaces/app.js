var shahwaiz = {
    name: "Shahwaiz",
    age: 20,
    hobbies: [2, 3, '5', 6],
    test: true,
    // color: white // error beacause student type me color nhi hai 
};
// console.log(typeof shahwaiz.hobbies[2]);
// console.log(typeof shahwaiz.hobbies[2]);
for (var key in shahwaiz) {
    // console.log(key);
    if (key === "age") {
        break;
    }
}
var azain = {
    name: "Azain",
    age: 17,
    hobbies: ['cricket', 'reading', 2, 4, 5]
};
//union data-type
// console.log(azain.test);// test? => boolean | undefined
// console.log(azain.hobbies[1]);
// console.log(azain.age);
// let arr:string[] = [1,'1'] // error
var arr2 = [1, '1']; // agr hum aesi array me value dengy tw usko by default data-types mil jaengi 
console.log(arr2);
// generic function types
function sum(a, b) {
    return a + b;
    // return "shahwaiz"; //error 
    //because humne return ki type number di hai or hum return string kr rahe hain 
}
console.log(sum(5, 7));
var StudentInformation = {
    student_name: "Ali Raza",
    instructor_name: "Miss Hooria",
    roll_num: 180991,
    course_enrolled: true,
    hobbies: ['cricket', 90]
};
console.log("StudentInformation", StudentInformation);
for (var key in StudentInformation) {
    console.log("".concat(key, " => ").concat(StudentInformation[key]));
    // if () {
    // }
}
