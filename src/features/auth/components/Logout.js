import {
  KEY_ACCESS_TOKEN,
  removeItem,
} from "../../../utiles/localStorageManager";

import { signOutAsync } from "../../user/userSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  async function handleLogout() {
    try {
      removeItem(KEY_ACCESS_TOKEN);
      dispatch(signOutAsync());
      navigate("/login");
    } catch (e) {
      console.log("this error is from logout navbar side ", e);
    }
  }
  useEffect(() => {
    handleLogout();
  }, []);
  return <div>SignOut in porgress.....</div>;
}

export default Logout;
