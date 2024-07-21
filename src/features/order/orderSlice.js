import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createOrder,
  fetchAllOrders,
  fetchTotalOrderCount,
  updateOrder,
} from "./orderAPI";

const initialState = {
  orders: [],
  status: "idle",
  totalOrders: 0,
  currOrder: null,
};
// we may need more info of current order
export const createOrderAsync = createAsyncThunk(
  "order/createOrder",
  async (order) => {
    const response = await createOrder(order);
    return response;
  }
);

// fetchAllorders for admin
export const fetchAllOrdersAsync = createAsyncThunk(
  "admin/fetchAllOrders",
  async ({ sort, pagination }) => {
    const response = await fetchAllOrders(sort, pagination);
    console.log("response of adminorder", response);
    return response;
  }
);
export const fetchTotalOrderCountAsync = createAsyncThunk(
  "admin/fetchTotalOrderCount",
  async () => {
    const response = await fetchTotalOrderCount();
    console.log("response of adminorder", response);
    return response;
  }
);
export const updateOrderAsync = createAsyncThunk(
  "admin/updateOrder",
  async (order) => {
    const response = await updateOrder(order);
    console.log("updated order", response);
    return response;
  }
);

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    resetCurrOrder: (state) => {
      state.currOrder = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrderAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createOrderAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.orders.push(action.payload);
        state.currOrder = action.payload;
      })
      .addCase(fetchAllOrdersAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.orders = action.payload;
      })
      .addCase(fetchTotalOrderCountAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.totalOrders = action.payload;
      })
      .addCase(updateOrderAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.orders.findIndex(
          (order) => order.id === action.payload.id
        );
        state.orders[index] = action.payload;
      });
  },
});

export const { resetCurrOrder } = orderSlice.actions;
export const ordersList = (state) => state.orderReducer.orders;
export const currentOrder = (state) => state.orderReducer.currOrder;
export const totalOrderNum = (state) => state.orderReducer.totalOrders;
export default orderSlice.reducer;
