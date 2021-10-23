import React from "react";
import { ProductsGrid } from "../ProductsGrid/ProductsGrid";
import * as S from "./Products.style";
import { useNavigation } from "../../hooks/useNavigation";
import { ButtonLink } from "../ButtonLink/ButtonLink";
import { getProducts } from "../../services/products";

type Props = {};

export const Products = (props: Props) => {
  const { navigateTo } = useNavigation();
  const products = getProducts(6);

  return (
    <S.ProductsWrapper>
      <div style={{ display: "flex" }}>
        <S.Title>Products</S.Title>

        <ButtonLink
          onClick={() => {
            navigateTo("/products");
          }}
        >
          ( View all )
        </ButtonLink>
      </div>

      <ProductsGrid products={products} />
    </S.ProductsWrapper>
  );
};
