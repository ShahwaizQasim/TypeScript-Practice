
type Student = {
    name: string;
    age: number;
    hobbies: (number | string)[];
    test?: boolean; // test me jo ? laga hai, iska matlab hai ke yeh property optional hai.
}

const shahwaiz: Student = {
    name: "Shahwaiz",
    age: 20,
    hobbies: [2, 3, '5', 6],
    test: true,
    // color: white // error beacause student type me color nhi hai 

}
// console.log(typeof shahwaiz.hobbies[2]);
// console.log(typeof shahwaiz.hobbies[2]);

for (const key in shahwaiz) {
    // console.log(key);
    if (key === "age") {
        break;
    }
}

const azain: Student = {
    name: "Azain",
    age: 17,
    hobbies: ['cricket', 'reading', 2, 4, 5]
}

//union data-type
// console.log(azain.test);// test? => boolean | undefined

// console.log(azain.hobbies[1]);
// console.log(azain.age);


// let arr:string[] = [1,'1'] // error
let arr2 = [1, '1'] // agr hum aesi array me value dengy tw usko by default data-types mil jaengi 
console.log(arr2);

// generic function types
function sum(a: number, b: number): number {
    return a + b;

    // return "shahwaiz"; //error 
    //because humne return ki type number di hai or hum return string kr rahe hain 
}
console.log(sum(5, 7));
// console.log(sum("hello")); //error


type education = {
    student_name: string,
    instructor_name: string,
    roll_num: number,
    course_enrolled: boolean
    hobbies: (string | number)[],
}

const StudentInformation: education = {
    student_name: "Ali Raza",
    instructor_name: "Miss Hooria",
    roll_num: 180991,
    course_enrolled: true,
    hobbies: ['cricket', 90]
}

console.log("StudentInformation", StudentInformation);

for (const key in StudentInformation) {
    console.log(`${key} => ${StudentInformation[key as keyof education]}`); // agar hum key ko types nahi bataengy tw error ayega
}

