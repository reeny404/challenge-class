import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

function HomePage() {
  const navigate = useNavigate();

  // useQuery(["모델", { 메타데이터(설명)}], queryFn: promise )
  const { data: products, isLoading } = useQuery({
    queryKey: ["products", { list: true }],
    queryFn: () => api.products.getProducts(),
  });

  const { mutate: addItemToCart } = useMutation({
    mutationFn: (productId) => api.cart.addItemToCart(productId),
  });

  const handleClickAddToCart = (productId) => () => {
    addItemToCart(productId, {
      onSuccess: () => {
        const yes = confirm(
          "상품이 장바구니에 잘 추가되었습니다. 장바구니로 갈까요?"
        );
        if (yes) {
          navigate("/cart");
        }
      },
    });
  };

  return (
    <div>
      <h1>Home page</h1>
      {isLoading ? (
        "loading..."
      ) : (
        <ul className="text-left">
          {products.map((product) => (
            <li key={product.id}>
              <div>{product.name}</div>
              <button onClick={handleClickAddToCart(product.id)}>
                장바구니에 추가
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default HomePage;
