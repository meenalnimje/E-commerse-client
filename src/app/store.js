import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";

import authReducer from "../features/auth/authSlice";
import cartReducer from "../features/cart/cartSlice";
import orderReducer from "../features/order/orderSlice";
import productReducer from "../features/product-list/productSlice";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import userReducer from "../features/user/userSlice";

const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  productReducer,
  authReducer,
  cartReducer,
  orderReducer,
  userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],

  // below line is helpful when we have to disable the redux otherwise whatever we do in redux it will be visible to others
});

export const persistor = persistStore(store);
// for redux-persist we have to do changes only in store.js and index.ja
