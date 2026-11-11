import React, { useEffect, useState } from "react";
import { deleteProduct, fetchProducts } from "../api/productApi";
import { toast } from "react-toastify";

const useProduct = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    const { data } = await fetchProducts();
    setProducts(data);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const softDeleteProduct = async (id) => {
    try {
      if (confirm("Hành vi này sẽ đưa sản phẩm đang kinh doanh vào lưu trữ")) {
        const data = deleteProduct(id);
        console.log(data);
        const newProducts = products.filter((item) => item._id !== id);
        console.log(newProducts);
        setProducts(newProducts);
        toast.success("Xoa thanh cong san pham!");
      }
    } catch (error) {
      console.log(error);
      toast.error(`Xoa san pham that bai: ${error.message}`);
    }
  };

  return { products, setProducts, softDeleteProduct };
};

export default useProduct;
