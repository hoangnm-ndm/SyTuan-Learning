import React, { useEffect, useState } from "react";
import { fetchProducts } from "../../api/productApi";

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await fetchProducts();
      setProducts(data);
    })();
  }, []);
  return (
    <div>
      {products.length !== 0 ? (
        products.map((item) => (
          <div key={item._id}>
            <h2>{item.title}</h2>
            <p>{item.price}</p>
            <button>Add to cart</button>
          </div>
        ))
      ) : (
        <p>Khong co san pham nao!</p>
      )}
    </div>
  );
};

export default ShopPage;
