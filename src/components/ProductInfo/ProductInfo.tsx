import React from "react";
import { ProductType } from "../../models/ProductType";
import { Typography } from "../Typogrphy/Typography";

import * as S from "./ProductInfo.style";

type Props = {
  product: ProductType;
};

export const ProductInfo = (props: Props) => {
  console.log(props.product);
  return (
    <S.ProductInfoWrapper>
      <Typography variant="h2" color="#d0163b">
        {props.product.price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
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
