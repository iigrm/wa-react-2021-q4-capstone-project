import React from "react";
import { ProductsGrid } from "../ProductsGrid/ProductsGrid";
import * as S from "./Products.style";
import { useNavigation } from "../../hooks/useNavigation";
import { ButtonLink } from "../ButtonLink/ButtonLink";

import { useFeaturedProducts } from "../../hooks/useFeaturedProducts";
import { SkeletonShimmer } from "../SkeletonShimmer/SkeletonShimmer";

type Props = {};

export const Products = (props: Props) => {
  const { navigateTo } = useNavigation();
  const { data, isLoading } = useFeaturedProducts();

  if (isLoading) return <SkeletonShimmer width="100%" height="400px" />;

  return (
    <S.ProductsWrapper>
      {data && !isLoading && (
        <>
          <div style={{ display: "flex" }}>
            <S.Title data-testid="featured-product-title">Products</S.Title>
            <ButtonLink
              onClick={() => {
                navigateTo("/products");
              }}
            >
              ( View all )
            </ButtonLink>
          </div>
          <ProductsGrid
            products={data.products}
            pagination={data.pagination}
            onSetPage={() => {}}
            showPagination={false}
          />
        </>
      )}
    </S.ProductsWrapper>
  );
};
