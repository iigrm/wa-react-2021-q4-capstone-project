import React from "react";
import { ProductType } from "../../models/ProductType";
import { Typography } from "../Typogrphy/Typography";

import * as S from "./ProductInfo.style";

type Props = {
  product: ProductType;
};

export const ProductInfo = (props: Props) => {
  return (
    <S.ProductInfoWrapper>
      <Typography variant="h3">{props.product.name}</Typography>
      <Typography variant="h4" color="rgba(30, 68, 199, 1)">
        {props.product.price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </Typography>
      <Typography variant="h6" color="#666">
        SKU: {props.product.sku}
      </Typography>
      <Typography variant="h6" color="#666">
        Stock: {props.product.stock}
      </Typography>
      <Typography variant="h6" color="#666">
        <b>Category: </b>
        {props.product.categoryName}
      </Typography>
      <Typography variant="h6" color="#666">
        <b>Tags: </b>
        {props.product.tags?.join(" - ")}
      </Typography>
    </S.ProductInfoWrapper>
  );
};
