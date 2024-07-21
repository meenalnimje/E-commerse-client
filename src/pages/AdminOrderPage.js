import AdminOrders from "../features/admin/components/AdminOrders";
import Navbar from "../features/navbar/Navbar";
import React from "react";

function AdminOrderPage() {
  return (
    <div>
      <Navbar>
        <AdminOrders />
      </Navbar>
    </div>
  );
}

export default AdminOrderPage;
