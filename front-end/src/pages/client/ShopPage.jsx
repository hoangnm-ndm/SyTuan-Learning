import React, { useEffect, useState } from "react";
import { fetchProducts } from "../../api/productApi";
import { Link } from "react-router";

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await fetchProducts();
      console.log(data);
      setProducts(data);
    })();
  }, []);
  return (
    <div>
      {products.length !== 0 ? (
        products.map((item) => (
          <div key={item._id}>
            <Link to={item._id}>
              <h2>{item.title}</h2>
            </Link>
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
