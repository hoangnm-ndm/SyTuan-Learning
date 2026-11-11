import api from ".";

export const fetchProducts = async () => {
  const { data } = await api.get("/products");
  return data;
};

export const fetchProductById = async (id) => {
  const { data } = await api.get(`/products/${id}`);
  return data;
};

export const createProduct = async (productData) => {
  const { data } = await api.post("/products", productData);
  return data;
};

export const updateProduct = async (id, productData) => {
  const { data } = await api.patch(`/products/${id}`, productData);
  return data;
};

export const deleteProduct = async (id) => {
  const { data } = await api.delete(`/products/${id}`);
  return data;
};

export const softDeleteProduct = async (id) => {
  const { data } = await api.patch(`/products/soft-delete/${id}`);
  return data;
};

export const restoreProduct = async (id) => {
  const { data } = await api.patch(`/products/restore/${id}`);
  return data;
};
