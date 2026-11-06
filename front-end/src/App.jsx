import { useEffect, useState } from "react";
import "./App.css";
import { fetchProducts } from "./api/productApi";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await fetchProducts();
      setProducts(data);
    })();
  }, []);
  return (
    <>
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

      <button onClick={() => setPage(page + 1)}>Next</button>
    </>
  );
}

export default App;
