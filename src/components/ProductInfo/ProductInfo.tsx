import React from "react";
import { ProductType } from "../../models/ProductType";
import { formatPrice } from "../../utils/products";
import { Typography } from "../Typogrphy/Typography";

import * as S from "./ProductInfo.style";

type Props = {
  product: ProductType;
};

export const ProductInfo = (props: Props) => {
  return (
    <S.ProductInfoWrapper>
      <Typography variant="h2" color="#d0163b">
        {formatPrice(props.product.price)}
      </Typography>
      <Typography variant="h6" color="#666">
        {`Stock: ${props.product.stock}, Category: ${
          props.product.categorySlug
        }, Tags:
        ${props.product.tags?.join(" - ")}`}
      </Typography>
    </S.ProductInfoWrapper>
  );
};
