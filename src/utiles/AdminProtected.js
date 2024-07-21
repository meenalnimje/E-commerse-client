import { KEY_ACCESS_TOKEN, getItem } from "../utiles/localStorageManager";
import { Navigate, Outlet } from "react-router";

import { LoggedInUserDetails } from "../features/user/userSlice";
import React from "react";
import { useSelector } from "react-redux";

function AdminProtected() {
  const user = getItem(KEY_ACCESS_TOKEN);
  const userDetails = useSelector(LoggedInUserDetails);
  console.log("userDetails from");
  return userDetails.role === "admin" && user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
}

export default AdminProtected;
