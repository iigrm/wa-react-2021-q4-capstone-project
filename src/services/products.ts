import FEATURED_PRODUCTS from "../mocks/en-us/featured-products.json";
import PRODUCTS from "../mocks/en-us/products.json";
import { ProductsDataType } from "../models/ProductsDataType";
import { ProductType } from "../models/ProductType";

const parseProducts = (productInput: ProductsDataType) => {
  const parsedProducts: ProductType[] =
    productInput.results?.map((result) => ({
      id: result.id,
      name: result.data.name,
      sku: result.data.sku,
      imageUrl: result.data.mainimage.url,
      category: result.data.category.id,
      stock: result.data.stock,
      price: result.data.price,
    })) || [];

  return parsedProducts;
};

const parseLimit = (products: ProductType[], limit?: number) =>
  typeof limit !== undefined ? products.slice(0, limit) : products;

export const getFeaturedProducts = (limit?: number) => {
  const parsedProducts = parseProducts(FEATURED_PRODUCTS);
  return parseLimit(parsedProducts, limit);
};

export const getProducts = (limit?: number) => {
  const parsedProducts = parseProducts(PRODUCTS);
  return parseLimit(parsedProducts, limit);
};
