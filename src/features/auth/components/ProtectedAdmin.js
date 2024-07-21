import { Navigate } from "react-router-dom";
import { loggedInUserTokenInfo } from "../authSlice";
import { useSelector } from "react-redux";

function ProtectedAdmin({ children }) {
  const user = useSelector(loggedInUserTokenInfo);
  if (!user) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }
  if (user && user.role !== "admin") {
    return <Navigate to="/"></Navigate>;
  }
  return children;
}

export default ProtectedAdmin;
