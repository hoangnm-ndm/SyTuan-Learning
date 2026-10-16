// * Peding
fetch("https://dummyjson.com/products", {
  method: "GET", // * PUT, PATCH, POST, DELETE, HEADER, ..
})
  .then((response) => response.json())
  .then((data) => {
    // * Những gì sẽ làm sau khi promise thành công (Fulfilled)
    console.log(data);
  })
  .catch(
    // * Những sự cố khiến promise thất bại (failed) sẽ được xử lý ở đây.
    (error) => {
      console.log(error);
    },
  )
  .finally(() => {
    console.log("don dep!");
  });

// * fetch là hàm khi được gọi sẽ trả về 1 promise (lời hứa).
//* Nếu promise thành công -> logic công việc tiếp theo sẽ ở trong then()
// * 2 promise liên tục tạo thành 2 lần "then" - gọi là promise chain

let success = false;
const myPromise = new Promise((resolver, reject) => {
  if (success) {
    resolver("thanh cong!");
  } else {
    reject("Bi loi!");
  }
});

myPromise
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
  .finally(() => {
    console.log("ket thuc!");
  });

async function fetchProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("xong!");
  }
}

fetchProducts();
