// api calling
import { axiosInstance } from "../../utiles/axiosClient";
export async function fetchLoggedInUserOrder() {
  // user ki sarri info more than the logg in one present in the auth ap
  try {
    const response = await axiosInstance.get("/orders/");
    // onServer it will give relevant info only not password, it can be id or email
    console.log("data of fetchOrderBy userid", response);
    const data = response.result;
    return data;
  } catch (err) {
    console.log("error from checkUser side", err);
  }
}
export async function fetchLoggedInUserDetails() {
  try {
    const response = await axiosInstance.get("/user/myInfo");
    // onServer it will give relevant info only not password, it can be id or email
    const data = response?.result[0];
    console.log("data of user", data);
    return data;
  } catch (err) {
    console.log("error from checkUser side", err);
  }
}
export async function updateUser(update) {
  try {
    const response = await axiosInstance.patch("/user/", update);
    console.log("data of after updateing user", response);
    const data = response.result;
    return data;
  } catch (err) {
    console.log("error from checkUser side", err);
  }
}

export async function signOut() {
  try {
    const response = await axiosInstance.post("/auth/logout");
    const data = response;
    return data;
  } catch (err) {
    console.log("error from checkUser side", err);
  }
}
