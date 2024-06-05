class CartAPI {
  #axios;
  constructor(axios) {
    this.#axios = axios;
  }

  async getCart() {
    const path = "/cart";
    const response = await this.#axios.get(path);
    console.log(response.data.result);
    return response.data.result;
  }

  async addItemToCart(productId) {
    const path = `/cart/products/${productId}`;
    const response = await this.#axios.post(path);
    return response.data.result;
  }

  async removeItemFromCart(productId) {
    const path = `/cart/products/${productId}`;
    const response = await this.#axios.delete(path);
    return response.data.result;
  }

  async clearItemInCart(productId) {
    const path = `/cart/products/${productId}/clear`;
    const response = await this.#axios.delete(path);
    return response.data.result;
  }
}

export default CartAPI;
