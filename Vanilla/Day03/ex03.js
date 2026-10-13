/**
 * find
 * filter
 * foreach
 * map
 * reduce
 */

const students = [
  { id: 1, name: "Trung", score: 8 },
  { id: 2, name: "Nam", score: 10 },
  { id: 3, name: "Bắc", score: 6 },
  { id: 4, name: "Nam", score: 2 },
];

// for (let i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }

//* tìm phần tử với callback, trả về undefined nếu không tìm thấy.
const result = students.find((item, index) => item.name === "Nam");
console.log(result);
console.log(students.filter((item) => item.name === "Nam"));

for (let i = 0; i < students.length; i++) {
  if (students[i].name === "Trung") {
    console.log(students[i]);
    ``;
  }
}

const animals = ["mouse", "cat", "dog"];
console.log(animals.includes("elephent"));

console.log(Array.prototype);

/**
 * * Hãy lọc ra mảng chứa các sản phẩm thuộc brand Apple và có giá từ 1500$
 */

const cart = [
  { id: 1, name: "samsung galaxy X", price: 2000, brand: "Samsung" },
  { id: 2, name: "iphone 12", price: 1800, brand: "Apple" },
  { id: 3, name: "Ipad mini 7", price: 1200, brand: "Apple" },
];

const resultForEach = cart.forEach((item) => {
  if (item.price >= 1500) {
    console.log(item);
  }
});

console.log(resultForEach);
