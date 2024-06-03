import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import api from "../api/api";
import Page from "../components/Page";

function HomePage() {
  // useQuery({
  //   queryKey : 가져온 데이터를 어떤 키에다가 저장할 것인지,
  //        1번 요소 : 데이터 모델명을 string으로 넣는다.
  //        2번 요소 : meta 데이터 (설명)
  //   queryFn : 데이터를 가져오는 함수
  // });

  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => api.products.getProducts(),
  });

  // const {
  //   data: brands,
  //   isLoading,
  //   isError,
  // } = useQuery({
  //   queryKey: ["brand", { page: 1 }],
  //   queryFn: () => api.brands.getBrands(),
  // });

  if (isLoading) {
    return <Page>로딩 중</Page>;
  }
  if (isError) {
    return <Page>에러발생</Page>;
  }

  return (
    <Page>
      <ol>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <Link to={`/products/${[product.id]}`}>{product.name}</Link>
            </li>
          );
        })}
      </ol>
    </Page>
  );
}

export default HomePage;
