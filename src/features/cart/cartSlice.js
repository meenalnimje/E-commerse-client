import {
  addToCart,
  deleteCart,
  fetchCartProducts,
  resetCart,
  updateCart,
} from "./cartAPI";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "",
  item: [],
};
export const addToCartAsync = createAsyncThunk(
  "cart/addToCart",
  async (item) => {
    const response = await addToCart(item);
    console.log("response of add to cart slide", response);
    return response;
  }
);
export const updateCartAsync = createAsyncThunk(
  "cart/updateCart",
  async (item) => {
    const response = await updateCart(item);
    return response;
  }
);
export const deleteCartAsync = createAsyncThunk(
  "cart/deleteFromCart",
  async (itemId) => {
    const response = await deleteCart(itemId);
    return response;
  }
);
export const fetchCartProductsAsync = createAsyncThunk(
  "cart/fetchCartProducts",
  async () => {
    const response = await fetchCartProducts();
    console.log("fetchCaert response", response);
    return response;
  }
);
export const resetCartAsync = createAsyncThunk("cart/resetCart", async () => {
  const response = await resetCart();
  return response;
});

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCartAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.item.push(action.payload);
      })
      .addCase(fetchCartProductsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.item = action.payload;
      })
      .addCase(updateCartAsync.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(updateCartAsync.fulfilled, (state, action) => {
        state.status = "idle";
        // replace the item with its modified version
        const index = state.item.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index != -1) {
          state.item[index] = action.payload;
        }
      })
      .addCase(deleteCartAsync.fulfilled, (state, action) => {
        state.status = "idle";
        // replace the item with its modified version
        const index = state.item.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index != -1) {
          state.item.splice(index, 1);
        }
      })
      .addCase(resetCartAsync.fulfilled, (state, action) => {
        state.item = [];
        state.status = "idle";
        // replace the item with its modified version
      });
  },
});

export const {} = cartSlice.actions;
export const addToCartDetails = (state) => state.cartReducer.item;
export default cartSlice.reducer;
