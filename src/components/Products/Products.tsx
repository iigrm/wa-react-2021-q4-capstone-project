import React from "react";
import { ProductsGrid } from "../ProductsGrid/ProductsGrid";

import PRODUCTS from "../../mocks/es-mx/featured-products.json";
import { ProductType } from "../../models/ProductType";
import * as S from "./Products.style";

export const Products = () => {
  const parsedProducts: ProductType[] = PRODUCTS.results.map((result) => ({
    name: result.data.name,
    sku: result.data.sku,
    imageUrl: result.data.mainimage.url,
    category: result.data.category.slug,
    stock: result.data.stock,
    price: result.data.price,
  }));
  return (
    <S.ProductsWrapper>
      <S.Title>Products</S.Title>
      <ProductsGrid products={parsedProducts} />
    </S.ProductsWrapper>
  );
};
