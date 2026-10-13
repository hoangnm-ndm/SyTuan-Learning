// * anonymous function - hàm ẩn danh là cách gọi những hàm được gán cho biến hoặc key của object - thường đa số hàm ẩn danh là expression function - tức là một biểu thức gán 1 hàm cho 1 biến.
/**
 * * expression function là một biểu thức gán, vì vậy khi nó hosting thì giá trị bị rơi vào TDZ -> không thể truy cập trước khi khai báo
 */

const cart = {
  items: [
    {
      id: 1,
      name: "samsung galaxy X",
      price: 2000,
      brand: "Samsung",
      quantity: 10,
    },
    { id: 2, name: "iphone 12", price: 1800, brand: "Apple", quantity: 2 },
    { id: 3, name: "Ipad mini 7", price: 1200, brand: "Apple", quantity: 5 },
  ],
  addToCart: function () {
    // logic them san pham vao gio hang
  },
};

sum(10, 20);
const sum = function (a, b) {
  return a + b;
};
