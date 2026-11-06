import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchProductById } from "../../api/productApi";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    (async () => {
      const { data } = await fetchProductById(id);
      console.log(data);
      setProduct(data);
    })();
  }, [id]);

  return (
    <div>
      <h1>{product.title}</h1>
      <p>Price: {product.price}</p>
      <p>{product.description}</p>
      <button>Mua ngay</button>
      <button>Them vao gio hang</button>
    </div>
  );
};

export default ProductDetailPage;
