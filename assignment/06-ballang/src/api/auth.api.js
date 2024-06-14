class AuthAPI {
  #axios;
  constructor(client) {
    this.#axios = client;
  }

  /**
   *
   * @param {email, password} object
   * @returns
   */
  async signUp(data) {
    const path = "auth/sign-up";
    const response = await this.#axios.post(path, data);
    return response.data.result;
  }

  async login(data) {
    const path = "auth/log-in";
    const response = await this.#axios.post(path, data);
    return response.data.result;
  }

  async logout() {
    const path = "auth/log-out";
    const response = await this.#axios.delete(path);
    return response.data.result;
  }

  async refreshToken() {
    const path = "/auth/refresh-token";
    const response = await this.#axios.get(path);
    return response.data.result;
  }
}

export default AuthAPI;
