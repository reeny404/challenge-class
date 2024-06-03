import { useEffect, useState } from "react";
import api from "../api/api";
import Page from "../components/Page";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    // 사용 전
    setIsLoading(true);
    async function init() {
      try {
        const products = await api.products.getProducts();
        setProducts(products);
        setIsSuccess(true);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    init();

    // 사용 후
    api.products.getProducts();
  }, []);

  if (isLoading) return <Page>loading...</Page>;
  if (isError) return <Page>error...</Page>;

  console.log(products);

  return (
    <Page>
      <ol>
        {products.map((product) => {
          <li key={product.id}>{product.name}</li>;
        })}
      </ol>
    </Page>
  );
}

export default HomePage;
