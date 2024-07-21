// api calling
import { axiosInstance } from "../../utiles/axiosClient";
export async function addToCart(item) {
  try {
    const response = await axiosInstance.post("/cart/", item);
    // onServer it will give relevant info only not password, it can be id or email
    console.log("add to cart data ", response);
    const data = response.result;
    return data;
  } catch (err) {
    console.log("error from add to cart side", err);
  }
}
export async function fetchCartProducts() {
  try {
    const response = await axiosInstance.get("/cart/");
    // onServer it will give relevant info only not password, it can be id or email
    console.log("data of fetch cart product", response);
    const data = response.result;
    return data;
  } catch (err) {
    console.log("error from fetchCartProducts", err);
  }
}
export async function updateCart(update) {
  try {
    const response = await axiosInstance.patch(`/cart/${update.id}`, update);
    // onServer it will give relevant info only not password, it can be id or email
    console.log("data of updatecart side ", response);
    const data = response.result;
    return data;
  } catch (err) {
    console.log("error from checkUser side", err);
  }
}
export async function deleteCart(itemId) {
  // delete an item from the cart
  try {
    const response = await axiosInstance.delete(`/cart/${itemId}`);
    // onServer it will give relevant info only not password, it can be id or email
    console.log("data of delete cart side ", response);
    const data = response.result;
    return data;
  } catch (err) {
    console.log("error from checkUser side", err);
  }
}
export const resetCart = async () => {
  // get all the items for the respective user and delete each
  const response = await fetchCartProducts();
  const items = response;
  console.log("reset cart api", response);
  for (let item of items) {
    await deleteCart(item.id);
  }
  return { status: "success" };
};
