class BrnadsAPI {
  #axios;
  constructor(client) {
    this.#axios = client;
  }

  async getBrands() {
    const path = "/brands";
    const response = await this.#axios.get(path);
    return response.data.result;
  }

  async getBrand(brandId) {
    const path = `/brands/${brandId}`;
    const response = await this.#axios.get(path);
    return response.data.result;
  }
}

export default BrnadsAPI;
