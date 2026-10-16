async function fetchProducts(page) {
  try {
    const response = await fetch(`https://dummyjson.com/products?page=${page}`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("xong!");
  }
}

function fetchProducts2() {
  fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("don dep!");
    });
}
