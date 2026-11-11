import React from "react";
import { useParams } from "react-router";

const ProductFormPage = () => {
  const { id } = useParams();

  const submit = async (payload) => {
    if (id) {
      // * logic update
    } else {
      // * logic add
    }
  };
  return <form>ProductFormPage</form>;
};

export default ProductFormPage;
