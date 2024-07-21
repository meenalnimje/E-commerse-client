import { Navigate } from "react-router-dom";
import { loggedInUserTokenInfo } from "../authSlice";
import { useSelector } from "react-redux";

function Protected({ children }) {
  const user = useSelector(loggedInUserTokenInfo);
  if (!user) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }
  return children;
}

export default Protected;
