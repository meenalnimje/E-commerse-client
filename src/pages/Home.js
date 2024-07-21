import Navbar from "../features/navbar/Navbar";
import ProductList from "../features/product-list/components/ProductList";
import { fetchCartProductsAsync } from "../features/cart/cartSlice";
import { fetchLoggedInUserDetailsAsync } from "../features/user/userSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCartProductsAsync());
    dispatch(fetchLoggedInUserDetailsAsync());
  }, [dispatch]);
  return (
    <div>
      <Navbar>
        <ProductList></ProductList>
      </Navbar>
    </div>
  );
}

export default Home;
