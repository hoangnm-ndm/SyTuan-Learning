import { useEffect, useState } from "react";
import "./App.css";
import HeaderClient from "./components/layout/client/HeaderClient";
import FooterClient from "./components/layout/client/FooterClient";
import Button from "./components/ui/Button";

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetch("http://localhost:8000/api/products", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        console.log("trang tiep theo");
        setProducts(data.data);
      });
  }, [page]);
  console.log("re-render");
  return (
    <>
      {products.length !== 0 ? (
        products.map((item) => (
          <div>
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
