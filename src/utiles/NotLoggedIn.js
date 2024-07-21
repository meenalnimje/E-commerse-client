import { KEY_ACCESS_TOKEN, getItem } from "../utiles/localStorageManager";
import { Navigate, Outlet } from "react-router";

import React from "react";

function NotLoggedIn() {
  const user = getItem(KEY_ACCESS_TOKEN);
  return user ? <Navigate to="/" /> : <Outlet />;
}

export default NotLoggedIn;
