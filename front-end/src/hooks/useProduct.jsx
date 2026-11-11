import React, { useEffect, useState } from "react";
import {
  createProduct,
  deleteProduct,
  fetchProducts,
  updateProduct,
} from "../api/productApi";
import { toast } from "react-toastify";

const useProduct = () => {
  const [products, setProducts] = useState([]);

  const getAll = async () => {
    const { data } = await fetchProducts();
    setProducts(data);
  };

  useEffect(() => {
    getAll();
  }, []);

  const softDelete = async (id) => {
    try {
      if (confirm("Hành vi này sẽ đưa sản phẩm đang kinh doanh vào lưu trữ")) {
        const data = deleteProduct(id);
        const newProducts = products.filter((item) => item._id !== id);
        setProducts(newProducts);
        toast.success(data.message);
      }
    } catch (error) {
      toast.error(`Xoa san pham that bai: ${error.message}`);
    }
  };

  const update = async (id, payload) => {
    try {
      const data = await updateProduct(id, payload);
      const newProducts = products.map((item) =>
        item._id === id ? data.data : item,
      );
      setProducts(newProducts);
      toast.success(data.message);
    } catch (error) {
      toast.error(`Cap nhat san pham that bai: ${error.message}`);
    }
  };

  const add = async (payload) => {
    try {
      const data = await createProduct(payload);
      setProducts([...products, data.data]);
      toast.success(data.message);
    } catch (error) {
      toast.error(`Them san pham that bai: ${error.message}`);
    }
  };

  return { products, softDelete, update, add };
};

export default useProduct;
