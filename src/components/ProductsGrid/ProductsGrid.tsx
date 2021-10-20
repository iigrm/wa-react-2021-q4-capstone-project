import React from "react";
import { ProductType } from "../../models/ProductType";
import { ProductCard } from "../ProductCard/ProductCard";

import * as S from "./ProductsGrid.style";

type Props = {
  products: ProductType[];
};

export const ProductsGrid = (props: Props) => {
  return (
    <>
      <S.ProductsGridWrapper>
        {props.products.map((product, idx) => (
          <ProductCard product={product} key={`product_card_${idx}`} />
        ))}
      </S.ProductsGridWrapper>
      );
    </>
  );
};
