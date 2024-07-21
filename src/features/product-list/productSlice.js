import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createProduct,
  fetchAllBrands,
  fetchAllCategory,
  fetchAllProducts,
  fetchProductByFilters,
  fetchProductById,
  fetchTotalProductCount,
  updateProduct,
} from "./productAPI";

const initialState = {
  products: [],
  status: "idle",
  brands: [],
  category: [],
  productDetails: null,
  totalItems: 0,
};
// How redux work
// jo jo api call karni hai ese fetchInfoAsync karke kar lo , extra reducer me dalo ki fetchInfoAsync function bannane ke baad kya hoga woh declare karo in extra reducer
// after that state set karo extra reducer me hi , after that fetchInfoAsync call karo through dispatch in the component in which you want to fetch the data,
// useSelector se use karlo
export const fetchAllProductAsync = createAsyncThunk(
  "product/fetchAllProducts",
  async () => {
    const response = await fetchAllProducts();
    return response;
  }
);
export const fetchTotalProductCountAsync = createAsyncThunk(
  "products/fetchProductCount",
  async () => {
    const response = await fetchTotalProductCount();
    return response;
  }
);
export const fetchProductByFilterAsync = createAsyncThunk(
  "product/fetchProductByFilter",
  async ({ filter, sort, pagination }) => {
    const response = await fetchProductByFilters(filter, sort, pagination);
    return response;
  }
);
export const fetchAllBrandsAsync = createAsyncThunk(
  "brand/fetchAllBrand",
  async () => {
    const response = await fetchAllBrands();
    return response;
  }
);
export const fetchAllCategoryAsync = createAsyncThunk(
  "brand/fetchAllCategory",
  async () => {
    const response = await fetchAllCategory();
    return response;
  }
);
export const fetchProductByIdAsync = createAsyncThunk(
  "product-detail/fetchProductById",
  async (id) => {
    const response = await fetchProductById(id);
    return response;
  }
);

// ADMIN THUNK
export const createProductAsync = createAsyncThunk(
  "admin/createproduct",
  async (product) => {
    const response = await createProduct(product);
    console.log("response of created product async", response);
    return response.data;
  }
);
export const updateProductAsync = createAsyncThunk(
  "admin/updateproduct",
  async (productDetail) => {
    const response = await updateProduct(productDetail);
    return response.data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    clearSelectedProduct: (state, action) => {
      state.productDetails = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProductAsync.fulfilled, (state, action) => {
        state.status = "done";
        state.products = action.payload;
      })
      .addCase(fetchTotalProductCountAsync.fulfilled, (state, action) => {
        state.status = "done";
        state.totalItems = action.payload;
      })
      .addCase(fetchProductByFilterAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductByFilterAsync.fulfilled, (state, action) => {
        state.status = "done";
        state.products = action.payload;
      })
      .addCase(fetchAllBrandsAsync.fulfilled, (state, action) => {
        state.status = "done";
        state.brands = action.payload;
      })
      .addCase(fetchAllCategoryAsync.fulfilled, (state, action) => {
        state.status = "done";
        state.category = action.payload;
      })
      .addCase(fetchProductByIdAsync.fulfilled, (state, action) => {
        state.status = "done";
        state.productDetails = action.payload;
      })
      .addCase(createProductAsync.fulfilled, (state, action) => {
        state.status = "done";
        state.products.push(action.payload);
      })
      .addCase(updateProductAsync.fulfilled, (state, action) => {
        state.status = "updated";
        const index = state.products.findIndex(
          (product) => product.id === action.payload.id
        );
        if (index !== -1) {
          state.products[index] = action.payload;
        }
      });
  },
});

export const { clearSelectedProduct } = productSlice.actions;
export const selectAllProduct = (state) => state.productReducer.products;
export const selectTotalItems = (state) => state.productReducer.totalItems;
export const brandsOption = (state) => state.productReducer.brands;
export const categoryOption = (state) => state.productReducer.category;
export const totalProducts = (state) => state.productReducer.totalItems;
export const productInfo = (state) => state.productReducer.productDetails;
export default productSlice.reducer;
