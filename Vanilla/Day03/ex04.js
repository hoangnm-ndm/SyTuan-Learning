const products = [
  { id: 1, name: "samsung galaxy X", price: 2000, brand: "Samsung" },
  { id: 2, name: "iphone 12", price: 1800, brand: "Apple" },
  { id: 3, name: "Ipad mini 7", price: 1200, brand: "Apple" },
];

// C1:
const newProducts = products.map((item) => {
  item.price = item.price * 1.2;
  return item;
});
console.log(newProducts);

// C2:
const newProducts2 = products.map((item) => ({
  ...item,
  price: item.price * 1.2,
}));
console.log(newProducts2);

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

/**
 * In ra thông tin giỏ hàng kèm thêm thuộc tính "total" cho mỗi sản phẩm ở trong giỏ hàng = price * quantity.
 */
