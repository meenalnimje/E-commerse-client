import Navbar from "../features/navbar/Navbar";
import UserOrder from "../features/user/components/UserOrder";

function UserOrderPage() {
  return (
    <div>
      <Navbar>
        <h3 className="text-4xl my-5 font-bold tracking-tight text-gray-900">
          My Orders
        </h3>
        <UserOrder />
      </Navbar>
    </div>
  );
}

export default UserOrderPage;
