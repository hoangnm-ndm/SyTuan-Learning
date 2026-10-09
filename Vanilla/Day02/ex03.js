/**
 * Object
 */

const myInfor = {
  name: "Hoang",
  age: 33,
  "que quan": "HN",
};

console.log(myInfor.age++);
console.log((myInfor.age = 100));
myInfor.email = "hoang@gmail.com";

const myStudents = [
  "Hoang",
  "tuan",
  {
    id: 1,
    nam: "trung",
    score: 8,
  },
  ,
  ,
  ,
  10,
];

console.log(myStudents.length);

const animals = ["dog", "cat", , , , , "mouse"];

console.log(animals.length);

console.log((animals[1] = "elephant"));
console.log(animals);
console.log(animals[5]);
