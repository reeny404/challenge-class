import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import api from "../api/api";
import Page from "../components/Page";

function ProductDetailPage() {
  const params = useParams();
  const productId = params.productId;

  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products", { id: productId }],
    queryFn: () => api.products.getProduct(productId),
    // refetchOnWindowFocus: true, // focus될 떄마다 (탭 선택 등) 데이터 리로딩
    // refetchInterval: 1000, // n초마다 데이터 리로딩
  });
  console.log(product);

  if (isLoading) {
    return <Page>로딩 중</Page>;
  }
  if (isError) {
    return <Page>에러발생</Page>;
  }

  return (
    <Page>
      <div>
        <img src={product.imgSrc} />
      </div>
      <h1>{product.name}</h1>
      <p>
        <span>{product.imgSrc}</span>
      </p>
    </Page>
  );
}

export default ProductDetailPage;
