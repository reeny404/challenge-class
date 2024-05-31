import { BASE_URL, client } from "./api";

// fetch 쓰는 방법
// export async function getProducts() {
//   const response = await fetch(`${BASE_RUL}/products/`, { headers : {Authorization : "Bearer token ~~~"}});
//   return await response.json();
// }

export async function getProduct(productId) {
  const response = await fetch(`${BASE_URL}/products/${productId}`);
  return await response.json();
}

// axios 쓰는 방법
export async function getProducts() {
  const endpoint = `${BASE_URL}/products/`;
  const response = await client.get(endpoint);
  const data = await response.json();

  return data;
}
