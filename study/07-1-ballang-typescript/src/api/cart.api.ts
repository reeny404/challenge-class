import { AxiosInstance } from "axios";
import { GetCartResponse } from "./cart.type";

class CartAPI {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  async getCart() {
    const path = "/cart";
    const response = await this.axios.get<GetCartResponse>(path);
    const data = response.data;

    return data.result;
  }

  async addItemToCart(productId: number) {
    const path = `/cart/products/${productId}`;
    const response = await this.axios.post(path);
    return response.data.result;
  }

  async removeItemFromCart(productId: number) {
    const path = `/cart/products/${productId}`;
    const response = await this.axios.delete(path);
    return response.data.result;
  }

  async clearItemInCart(productId: number) {
    const path = `/cart/products/${productId}/clear`;
    const response = await this.axios.delete(path);
    return response.data.result;
  }
}

export default CartAPI;
