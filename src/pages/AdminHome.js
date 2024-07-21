import AdminProductList from "../features/admin/components/AdminProductList";
import Navbar from "../features/navbar/Navbar";
import { fetchLoggedInUserDetailsAsync } from "../features/user/userSlice";
import { fetchTotalOrderCountAsync } from "../features/order/orderSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function AdminHome() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTotalOrderCountAsync());
    dispatch(fetchLoggedInUserDetailsAsync());
  }, []);
  return (
    <div>
      <Navbar>
        <AdminProductList />
      </Navbar>
    </div>
  );
}

export default AdminHome;
