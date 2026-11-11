import React, { useState } from "react";
import useProduct from "../../hooks/useProduct";
import { Link } from "react-router";
import { softDeleteProduct } from "../../api/productApi";

const ProductManagement = () => {
  const { products, softDeleteProduct } = useProduct();
  // const [toggleForm, setToggleForm] = useState(false);
  return (
    <div>
      {/* {toggleForm && <form action="">Form</form>} */}
      <table border="1">
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Price</th>
            <th>Stock</th>
            <th>
              {/* <button onClick={() => setToggleForm(true)}>Add new</button> */}

              <Link to={"add"}>Add New</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {products.length !== 0 &&
            products.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.stock}</td>
                <td>
                  <button onClick={() => softDeleteProduct(item._id)}>
                    Ngừng kinh doanh
                  </button>{" "}
                  <Link to={`update/${item._id}`}>Cap nhat</Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductManagement;
