import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";

import { CategoriesFilters } from "../../components/CategoriesFilters/CategoriesFilter";
import { Layout } from "../../components/Layout/Layout";
import { LoadingView } from "../../components/LoadingView/LoadingView";
import { ProductsGrid } from "../../components/ProductsGrid/ProductsGrid";
import { Typography } from "../../components/Typogrphy/Typography";
import { useProducts } from "../../hooks/useProducts";
import { ProductType } from "../../models/ProductType";

import * as S from "./ProductList.style";

export const ProductList = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const history = useHistory();
  const search = useLocation().search;
  const searchParam = new URLSearchParams(search);
  const page = parseInt(searchParam.get("page") || "1");
  const { data, isLoading } = useProducts([], page);

  const [products, setProducts] = useState<ProductType[]>([]);
  const [filters, setFilters] = useState<string[]>([]);

  useEffect(() => {
    if (data && !isLoading) {
      const products = data.products;
      if (filters.length === 0) {
        setProducts(products);
      } else {
        setProducts(
          products.filter(
            (product) => filters.indexOf(product.categorySlug) !== -1
          )
        );
      }
    }
  }, [filters, data, isLoading]);

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

  const handleSetPage = (page: number) => {
    history.push({
      pathname: "/products",
      search: `?page=${page}`,
    });
  };

  if (!data && isLoading) return <LoadingView />;

  return (
    <>
      {data && (
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
                <ProductsGrid
                  products={products}
                  pagination={data?.pagination}
                  onSetPage={(page: number) => handleSetPage(page)}
                  showPagination={true}
                />
              ) : (
                <Typography variant="h2">No results found</Typography>
              )}
            </S.ProductsWrapper>
          </S.ProductListWrapper>
        </Layout>
      )}
    </>
  );
};
