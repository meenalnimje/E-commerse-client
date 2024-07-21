import { KEY_ACCESS_TOKEN, getItem } from "../utiles/localStorageManager";
import { Navigate, Outlet } from "react-router";

import React from "react";

function Protected() {
  const user = getItem(KEY_ACCESS_TOKEN);
  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default Protected;
