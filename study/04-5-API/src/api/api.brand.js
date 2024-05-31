import { BASE_URL } from "./api";

export async function getBrands() {
  const response = await fetch(`${BASE_URL}/brands`);
  return await response.json();
}

export async function getBrand(brandId) {
  const response = await fetch(`${BASE_URL}/brands/${brandId}`);
  return await response.json();
}
