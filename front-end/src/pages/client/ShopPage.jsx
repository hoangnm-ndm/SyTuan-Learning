import { Link } from "react-router";
import useProduct from "../../hooks/useProduct";

const ShopPage = () => {
  const { products } = useProduct();
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
