/**
 * ! Data type:
 * * Primitive type - nguyên thuỷ
 * - Number
 * - String
 * - Boolean
 * - null: null
 * - undefined: undefined
 * - Symbol
 * - BigInt: Số lớn
 *
 * * Object type - Reference type
 * - Object
 * - Array
 * - Function
 */

const a = 10;
const b = 20;
let c = a + b;

// tiền tố, hậu tố
console.log(++c); // c = c + 1
console.log(c);
// ++c; // c = c + 1

let number = Number("10");
let myNumber = new Number(100);
console.log(myNumber);
// console.log(typeof number);
// console.log(typeof myNumber);

let myString = "Hoang";
newString = myString + " 2026";
console.log(newString);
console.log(typeof newString);

if (3 > 2 === true) {
  console.log(`3 lon hon 2`);
}
let userIsActive = true;
let isBlock = true;

/**
 * null: đại diện cho giá trị rỗng, không có gì, nhưng thường do lập trình viên thiết lập.
 *
 * undefined: thực sự không có giá trị, thường do hệ thống tự gán. Ví dụ: truy cập 1 key không tồn tại, gọi phần tử mảng không tồn tại, khai báo biến nhưng có giá trị,
 */

let t;
console.log(t);

let myNull = null;
console.log(typeof myNull);
console.log(typeof undefined);

const myInfor = {
  name: "hoang",
  country: null,
};

console.log(myInfor.country);
