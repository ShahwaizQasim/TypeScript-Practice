
type Student = {
    name: string;
    age: number;
    hobbies: (number | string)[];
    test?: boolean;
}

const shahwaiz: Student = {
    name:"Shahwaiz",
    age: 20,
    hobbies: [2,3,'5',6],
    test: true,
    // color: white // error

}
// console.log(typeof shahwaiz.hobbies[2]);
console.log(typeof shahwaiz.hobbies[2]);

for (const key in shahwaiz) {
    // console.log(key);
    if (key === "age") {
        break;
    }
}

const azain: Student = {
    name: "Azain",
    age: 17,
    hobbies: ['cricket','reading',2,4,5]
}

//union data-type
// console.log(azain.test);// test? => boolean | undefined

// console.log(azain.hobbies[1]);
// console.log(azain.age);


// let arr:string[] = [1,'1'] // error
let arr2 = [1,'1'] // agr hum aesi array me value dengy tw usko by default data-types mil jaengi 
console.log(arr2);


