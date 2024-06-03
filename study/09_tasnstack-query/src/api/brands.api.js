class BrandAPI {
  #client;
  constructor(client) {
    this.#client = client;
  }

  async getBrands() {
    const response = await this.#client.get("/brands");
    const data = response.data;
    return data.result;
  }
}

export default BrandAPI;
