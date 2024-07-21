import { axiosInstance } from "../../utiles/axiosClient";
export async function createOrder(order) {
  // user ke orders ke liye
  try {
    const response = await axiosInstance.post("/orders/", order);
    // onServer it will give relevant info only not password, it can be id or email
    console.log("data of creatOrder ", response);
    const data = response.result;
    return data;
  } catch (err) {
    console.log("error from checkUser side", err);
  }
}
export async function fetchTotalOrderCount(order) {
  // user ke orders ke liye
  try {
    const response = await axiosInstance.get("/orders/totalOrders");
    // onServer it will give relevant info only not password, it can be id or email
    const data = response.result;
    return data;
  } catch (err) {
    console.log("error from checkUser side", err);
  }
}
export async function updateOrder(order) {
  try {
    const response = await axiosInstance.patch(`/orders/${order.id}`, order);
    // onServer it will give relevant info only not password, it can be id or email
    console.log("data of updateOrder ", response);
    const data = response.result;
    return data;
  } catch (err) {
    console.log("error from checkUser side", err);
  }
}
//
export async function fetchAllOrders(sort, pagination) {
  // for admin
  try {
    let queryString = "";

    for (let key in sort) {
      queryString += `${key}=${sort[key]}&`;
    }
    for (let key in pagination) {
      queryString += `${key}=${pagination[key]}&`;
    }
    const response = await axiosInstance.get(
      `/orders/getOrders?${queryString}`
    );
    console.log("data of fetchall orders ", response);
    const data = response.result;
    return data;
  } catch (err) {
    console.log("error from checkUser side", err);
  }
}
