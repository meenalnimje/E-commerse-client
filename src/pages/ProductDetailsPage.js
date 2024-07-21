import Navbar from "../features/navbar/Navbar";
import ProductDetails from "../features/product-list/components/ProductDetails";

function ProductDetailsPage() {
  return (
    <div>
      <Navbar>
        <ProductDetails />
      </Navbar>
    </div>
  );
}

export default ProductDetailsPage;
