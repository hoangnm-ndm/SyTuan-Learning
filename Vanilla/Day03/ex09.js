/**
 * * Arrow function - thay key function bằng mũi tên
 * * Gọn, cú pháp ngắn.
 * * Arrow function không có ngữ cảnh riêng, không nhớ nơi sinh ra, khi dùng this cho method thì this sẽ trỏ ra context bên ngoài nó.
 * * Arrow function cũng có thể là expression function vì nó cũng có thể được gán cho biến.
 */

const cart = {
  userId: "123",
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
  addToCart: () => {
    // logic them san pham vao gio hang
    console.log("them vao gio hang thanh cong", this);
  },
};

console.log(window);

cart.addToCart();

// const sum = (a, b) => a + b;

const click = () => {
  console.log("click me!");
};
document.getElementById("btn").addEventListener("click", click);
