import React from "react";

import { ProductType } from "../../models/ProductType";
import { Card } from "../Card/Card";
import { Typography } from "../Typogrphy/Typography";

import * as S from "./ProductCard.style";

type Props = {
  product: ProductType;
};

export const ProductCard = (props: Props) => {
  const { product } = props;
  return (
    <>
      <Card height={300} width={200}>
        <Typography variant="h3" align="center">
          {product.name}
        </Typography>
        <Typography variant="h6" color="#ccc">
          SKU: {product.sku}
        </Typography>
        <Typography variant="h6" color="#ccc">
          Stock: {product.stock}
        </Typography>
        <S.ProductImage src={product.imageUrl} loading="lazy" />
        <Typography variant="h4" color="rgba(30, 68, 199, 1)">
          {product.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </Typography>
      </Card>
    </>
  );
};
