import {
  LoggedInUserDetails,
  LoggedInUserOrders,
  fetchLoggedInUserOrderAsync,
} from "../userSlice";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";

function UserOrder() {
  const user = useSelector(LoggedInUserDetails);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchLoggedInUserOrderAsync());
  }, []);
  const userOrderList = useSelector(LoggedInUserOrders);
  return (
    <div>
      {userOrderList?.map((item, index) => {
        return (
          <div>
            <div className="mx-auto mt-12 bg-white max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <h1 className="text-4xl my-5 font-bold tracking-tight text-gray-900">
                  Items Ordered
                </h1>
                <h3 className="text-4xl my-5 font-bold tracking-tight text-gray-900">
                  Order Status:{item.status}
                </h3>
                <div className="flow-root">
                  <ul role="list" className="-my-6 divide-y divide-gray-200">
                    {item.items.map((products) => (
                      <li key={products.id} className="flex py-6">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img
                            src={products?.product?.thumbnail}
                            alt={products?.product?.imageAlt}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>
                                <a href={products?.product?.href}>
                                  {products?.product?.title}
                                </a>
                              </h3>
                              <p className="ml-4">{products?.product?.price}</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">
                              {products?.product?.color}
                            </p>
                          </div>
                          <div className="flex flex-1 items-end justify-between text-sm">
                            <div className="text-gray-500">
                              <label
                                htmlFor="quantity"
                                className="inline mr-3 text-sm font-medium leading-6 text-gray-900"
                              >
                                Qty :{products?.quatity}
                              </label>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Total Items</p>
                  <p>{item.totalItems}</p>
                </div>
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>Rs.{item.totalPrice}</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500">
                  Shipping and taxes calculated at checkout.
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default UserOrder;
