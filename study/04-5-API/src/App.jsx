import { useEffect } from "react";
import "./App.css";
import { getBrand, getBrands } from "./api/api.brand";
import { getProduct, getProducts } from "./api/api.product";

function App() {
  const productId = 9587059;
  const brandId = 115;

  useEffect(() => {
    getProducts();
    getProduct(productId);
    getBrands();
    getBrand(brandId);
  }, []);

  return <>hello</>;
}

export default App;
