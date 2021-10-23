import React from "react";
import { CategoriesFilters } from "../../components/CategoriesFilters/CategoriesFilter";
import { Layout } from "../../components/Layout/Layout";
import { ProductsGrid } from "../../components/ProductsGrid/ProductsGrid";
import { getProducts } from "../../services/products";
import * as S from "./ProductList.style";

export const ProductList = () => {
  const products = getProducts();
  return (
    <Layout>
      <S.ProductListWrapper>
        <S.CategoriesFilterWrapper>
          <CategoriesFilters />
        </S.CategoriesFilterWrapper>
        <S.ProductsWrapper>
          <ProductsGrid products={products} />
        </S.ProductsWrapper>
      </S.ProductListWrapper>
    </Layout>
  );
};
