class ProductsAPI {
  #axios;
  constructor(axios) {
    this.#axios = axios;
  }

  async getProducts() {
    const path = "/products";
    const response = await this.#axios.get(path);
    return response.data.result;
  }

  async getProduct(productId) {
    const path = `/products/${productId}`;
    const response = await this.#axios.get(path);
    return response.data.result;
  }
}

export default ProductsAPI;
