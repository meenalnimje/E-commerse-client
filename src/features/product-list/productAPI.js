// api calling
import { axiosInstance } from "../../utiles/axiosClient";
export async function fetchAllBrands() {
  try {
    const response = await axiosInstance.get("/brand/");
    // onServer it will give relevant info only not password, it can be id or email
    const data = response.result;
    return data;
  } catch (err) {
    console.log("error from checkUser side", err);
  }
}
export async function fetchAllCategory() {
  try {
    const response = await axiosInstance.get("/category/");
    // onServer it will give relevant info only not password, it can be id or email
    console.log("data of categpry ", response);
    const data = response.result;
    return data;
  } catch (err) {
    console.log("error from checkUser side", err);
  }
}
export async function fetchAllProducts() {
  try {
    const response = await axiosInstance.get("/products/");
    // onServer it will give relevant info only not password, it can be id or email
    console.log("data of fetch all products ", response);
    const data = response.result;
    return data;
  } catch (err) {
    console.log("error from checkUser side", err);
  }
}
export async function fetchProductById(id) {
  try {
    const response = await axiosInstance.get(`/products/${id}`);
    // onServer it will give relevant info only not password, it can be id or email
    console.log("data of fetch  product by id ", response);
    const data = response.result;
    return data;
  } catch (err) {
    console.log("error from checkUser side", err);
  }
}
export async function fetchTotalProductCount() {
  try {
    const response = await axiosInstance.get(`/products/totalProducts`);
    // onServer it will give relevant info only not password, it can be id or email
    console.log("data of fetch  product by id ", response);
    const data = response.result;
    return data;
  } catch (err) {
    console.log("error from checkUser side", err);
  }
}
export async function fetchProductByFilters(filter, sort, pagination) {
  // filter={"category":"value"}
  // pagination: {_page:val1,_limit:val2}_page=1&_limit=2
  // ToDO : while implementing server we will allow multiple options
  // TODO: server should filter the delted data
  try {
    let queryString = "";
    for (let key in filter) {
      const categoryValues = filter[key];
      if (categoryValues.length) {
        const lastCategoryValue = categoryValues[categoryValues.length - 1];
        queryString += `${key}=${lastCategoryValue}&`;
      }
    }
    for (let key in sort) {
      queryString += `${key}=${sort[key]}&`;
    }
    for (let key in pagination) {
      queryString += `${key}=${pagination[key]}&`;
    }
    const response = await axiosInstance.get(`/products?${queryString}`);
    // onServer it will give relevant info only not password, it can be id or email
    const data = response.result;
    console.log("data of fetch product by filters ", response.result);
    return data;
  } catch (err) {
    console.log("error from checkUser side", err);
  }
}

// Admin API's

export async function createProduct(productDetail) {
  try {
    const response = await axiosInstance.post(
      "/products/createProduct",
      productDetail
    );
    // onServer it will give relevant info only not password, it can be id or email
    console.log("data of creatProduct ", response);
    const data = response.result[0];
    return data;
  } catch (err) {
    console.log("error from checkUser side", err);
  }
}
export async function updateProduct(productDetail) {
  try {
    const response = await axiosInstance.patch(
      `/products/${productDetail.id}`,
      productDetail
    );
    // onServer it will give relevant info only not password, it can be id or email
    console.log("data of updateProduct ", response);
    const data = response.result[0];
    return data;
  } catch (err) {
    console.log("error from checkUser side", err);
  }
}
