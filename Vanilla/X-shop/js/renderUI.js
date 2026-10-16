const productsElement = document.getElementById("products");

export function renderUI(products) {
  let content = products
    .map(
      (item) =>
        `
          <div class="product-card">
            <img src="${item.thumbnail}" alt="${item.title}" width="100px"/>
            <div class="product-infor">
              <h2>${item.title}</h2>
              <div>Giá: ${item.price}</div>
              <p>Mô tả: ${item.description}</p>
              <button>Add to cart</button>
            </div>
          </div>
      `,
    )
    .join("\n");
  // console.log(content);
  productsElement.innerHTML = content;
}
