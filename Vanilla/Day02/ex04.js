const myInfor = {
  name: "Minh",
  email: "hoang@gmail.com",
  password: "123",
  hello: function () {
    console.log(`${this.name} chao moi nguoi!`);
  },
};

myInfor.hello();

console.log(Object.keys(myInfor));
console.log(Object.values(myInfor));
console.log(Object.entries(myInfor));

//* function contructor: nha may san xuat
function User(email, password) {
  this.email = email;
  this.password = password;
}

User.prototype.hello = function () {
  console.log("xin chao");
};

// instance: nguyen mau
const human = new User("duongtang@gmail.com", "123");
human.hello();

console.log(Object.prototype);

console.log(Array.prototype);

const myNumbers = [1, 2, 3];
const myNewNumbers = myNumbers.map((item) => item * 2);
console.log(myNewNumbers);

const students = [
  { id: 1, name: "Hung" },
  { id: 2, name: "Tuan" },
];
const result = students.find((item) => item.name === "Tuan");
console.log(result);

console.log(Array.prototype);

/**
 *
 * function
 * callback
 * async/await
 * promise
 */

/**
 *
 */

const objA = { name: "Hoang" };
const objB = { age: 34, address: "HN" };
// Spread operator: rải các thuộc tính, giá trị vào một vùng mới
const objC = { ...objA, ...objB };

const arr1 = [1, 2, 3];
const arr2 = [5, 6, 7];
const sumary = [...arr1, ...arr2, 100];
console.log(sumary);

const [first, second, ...rest] = sumary;
console.log(first);
console.log(second);
console.log(rest);

// destructuring
const { name, age } = objC;
console.log(name);

const arrCopy = [...sumary];
arrCopy.push("x");

console.log(arrCopy);
console.log(sumary);
