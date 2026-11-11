import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { fetchProductById } from "../../api/productApi";
import { productSchema } from "../../validation/product";
import useProduct from "../../hooks/useProduct";

const ProductFormPage = () => {
  const { add, update } = useProduct();
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(productSchema),
  });
  useEffect(() => {
    (async () => {
      const { data } = await fetchProductById(id);
      reset(data);
    })();
  }, [id]);

  const submit = async (payload) => {
    id ? update(id, payload) : add(payload);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="form group">
        <label htmlFor="">Title</label>
        <input type="text" {...register("title")} />
        {errors?.title && (
          <p style={{ color: "red" }}>{errors.title.message}</p>
        )}
      </div>

      <div className="form group">
        <label htmlFor="">Price</label>
        <input type="number" {...register("price", { valueAsNumber: true })} />
        {errors?.price && (
          <p style={{ color: "red" }}>{errors.price.message}</p>
        )}
      </div>

      <div className="form group">
        <label htmlFor="">Stock</label>
        <input type="number" {...register("stock", { valueAsNumber: true })} />
        {errors?.stock && (
          <p style={{ color: "red" }}>{errors.stock.message}</p>
        )}
      </div>

      <div className="form group">
        <label htmlFor="">Description</label>
        <textarea rows="10" cols="10" {...register("description")}></textarea>
      </div>

      <div className="form group">
        <button>{id ? "Update" : "Add New"}</button>
        <button
          type="button"
          onClick={() =>
            reset({ title: "", price: 0, stock: 0, description: "" })
          }
        >
          Reset Form
        </button>
        <Link to="/admin/products">Danh sách sản phẩm</Link>
      </div>
    </form>
  );
};

export default ProductFormPage;
