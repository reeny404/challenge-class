import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api from "../api/api";

function CartPage() {
  const queryClient = useQueryClient();

  // useQuery(["모델", { 메타데이터(설명)}], queryFn: promise )
  const { data: cart, isLoading } = useQuery({
    queryKey: ["cart"],
    queryFn: () => api.cart.getCart(),
  });

  const { mutateAsync: removeItemToCart } = useMutation({
    mutationFn: (productId) => api.cart.removeItemFromCart(productId),
  });

  const handleClickRemoveItemFromCart = (productId) => () => {
    removeItemToCart(productId, {
      onSuccess: () => {
        alert("상품이 장바구니에서 제거되었습니다.");
        queryClient.invalidateQueries({ queryKey: ["cart"] });
        // queryClient.invalidateQueries({ queryKey: ["cart"], exact : true });
      },
    });
  };

  return (
    <div>
      <h1>Cart</h1>
      {isLoading ? (
        "loading..."
      ) : (
        <ul className="text-left">
          {cart.items.map((cartItem) => (
            <li key={cartItem.id}>
              <div>{cartItem.product.name}</div>
              <button
                onClick={handleClickRemoveItemFromCart(cartItem.product.id)}
              >
                장바구니에서 삭제
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CartPage;
