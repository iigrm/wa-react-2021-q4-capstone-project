import PRODUCTS from "../mocks/es-mx/featured-products.json";
import { ProductType } from "../models/ProductType";

export const getProducts = (limit?: number) => {
  const parsedProducts: ProductType[] = PRODUCTS.results.map((result) => ({
    id: result.id,
    name: result.data.name,
    sku: result.data.sku,
    imageUrl: result.data.mainimage.url,
    category: result.data.category.slug,
    stock: result.data.stock,
    price: result.data.price,
  }));

  return typeof limit !== undefined
    ? parsedProducts.slice(0, limit)
    : parsedProducts;
};
