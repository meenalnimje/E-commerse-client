import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { LoggedInUserDetails } from "../features/user/userSlice";
import { resetCartAsync } from "../features/cart/cartSlice";
import { resetCurrOrder } from "../features/order/orderSlice";
import { useEffect } from "react";

function OrderSuccessPage() {
  const params = useParams();
  const dispatch = useDispatch();
  const user = useSelector(LoggedInUserDetails);
  // console.log("user", user);
  useEffect(() => {
    // resert-cart
    dispatch(resetCartAsync());
    // reset currOrder
    dispatch(resetCurrOrder());
  }, [dispatch]);
  return (
    <div className="bg-white">
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">
            Order Placed Successfully
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Order No. {params?.id}
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            You can check your order in My orders
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default OrderSuccessPage;
