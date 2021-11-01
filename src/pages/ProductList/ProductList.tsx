import React, { useEffect, useState } from "react";
import { CategoriesFilters } from "../../components/CategoriesFilters/CategoriesFilter";
import { Layout } from "../../components/Layout/Layout";
import { Pagination } from "../../components/Pagination/Pagination";
import { ProductsGrid } from "../../components/ProductsGrid/ProductsGrid";
import { Typography } from "../../components/Typogrphy/Typography";
import { getProducts } from "../../services/products";
import * as S from "./ProductList.style";

export const ProductList = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [products, setProducts] = useState(getProducts());
  const [filters, setFilters] = useState<string[]>([]);

  useEffect(() => {
    const products = getProducts();
    if (filters.length === 0) {
      setProducts(products);
    } else {
      setProducts(
        products.filter((product) => filters.indexOf(product.category) !== -1)
      );
    }
  }, [filters]);

  const handleSelectFilter = (filter: string) => {
    const filterIdx = filters.indexOf(filter);

    if (filterIdx === -1) {
      setFilters((oldFilters) => [...oldFilters, filter]);
      return;
    }

    setFilters((oldFilters) => [
      ...oldFilters.filter((item, idx) => idx !== filterIdx),
    ]);
  };

  const handleClearFilter = () => {
    setFilters([]);
  };

  return (
    <Layout>
      <S.ProductListWrapper>
        <S.CategoriesFilterWrapper>
          <CategoriesFilters
            onSelectFilter={handleSelectFilter}
            onClearFilter={handleClearFilter}
            filters={filters}
          />
        </S.CategoriesFilterWrapper>
        <S.ProductsWrapper>
          {products.length ? (
            <ProductsGrid products={products} />
          ) : (
            <Typography variant="h2">No results found</Typography>
          )}
        </S.ProductsWrapper>
      </S.ProductListWrapper>
      <S.PaginationWrapper>
        <Pagination />
      </S.PaginationWrapper>
    </Layout>
  );
};
