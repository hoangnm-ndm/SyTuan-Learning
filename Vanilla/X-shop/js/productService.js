import { renderUI } from "./renderUI.js";

export async function fetchProducts(page) {
  try {
    const response = await fetch(`https://dummyjson.com/products?page=${page}`);
    const data = await response.json();
    renderUI(data.products);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("xong!");
  }
}
