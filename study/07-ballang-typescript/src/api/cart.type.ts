export type GetCartResponse = {
  error: null;
  sucess: boolean;
  result: { id: number, items: CartItem[] }
}

export type CartItem = {
  cartId: number;
  createAt: string;
  id: number;
  product: any;
  productId: number;
  quantity: number;
  updatedAt: string
}