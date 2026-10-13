const cart = [
  {
    id: 1,
    name: "samsung galaxy X",
    price: 2000,
    brand: "Samsung",
    quantity: 10,
  },
  { id: 2, name: "iphone 12", price: 1800, brand: "Apple", quantity: 2 },
  { id: 3, name: "Ipad mini 7", price: 1200, brand: "Apple", quantity: 5 },
];

const totalPrice = cart.reduce(
  (previousVallue, currentValue, currentIndex, array) =>
    (previousVallue += currentValue.price * currentValue.quantity),
  0,
);

/**
 * * previousVallue - phần tử ngay trước phần được duyệt (nếu có giá trị khởi tạo thì lần đầu duyệt previous chính là giá trị khởi tạo). Sau mỗi lần duyệt -> giá trị trả về của lần duyệt trước chính là giá trị khởi tạo của lần duyệt sau.
 * * currentValue = chính phần tử được duyệt
 * * currentIndex = index của phần tử được duyệt
 * * array = là bản thân mảng ban đầu (ko thay đổi qua mỗi lần duyệt)
 */

/**
 * * NaN = Not a Number
 */
console.log(totalPrice);

const numbers = [1, 2, 3, 4, 10];

console.log(numbers.reduce((prev, cur) => (prev += cur), 0));
