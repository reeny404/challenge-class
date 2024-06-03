class ProductsAPI {
  #client;

  constructor(client) {
    this.#client = client;
  }

  async getProducts() {
    const response = await this.#client.get("/products");
    const data = response.data;
    return data.result;
  }

  async getProduct(productId) {
    const response = await this.#client.get(`/products/${productId}`);
    const data = response.data;
    return data.result;
  }
}

export default ProductsAPI;
