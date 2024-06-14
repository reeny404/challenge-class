import axios from "axios";
import AuthAPI from "./auth.api";
import BrnadsAPI from "./brands.api";
import CartAPI from "./cart.api";
import ProductsAPI from "./products.api";

const BASE_URL = "https://api.ballang.yoojinyoung.com";

class API {
  #axios;

  constructor() {
    this.#axios = axios.create({ baseURL: BASE_URL, withCredentials: true });
    this.auth = new AuthAPI(this.#axios);
    this.brands = new BrnadsAPI(this.#axios);
    this.cart = new CartAPI(this.#axios);
    this.products = new ProductsAPI(this.#axios);
  }

  setAcessToken(accessToken) {
    this.#axios.defaults.headers.common.Authorization = accessToken
      ? `Bearer ${accessToken}`
      : "";
  }
}

const api = new API();
export default api;
