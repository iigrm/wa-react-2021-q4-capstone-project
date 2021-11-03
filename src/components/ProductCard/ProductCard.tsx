import React from "react";
import { Link } from "react-router-dom";

import { ProductType } from "../../models/ProductType";
import { Card } from "../Card/Card";
import { Button } from "../Button/Button";
import { Typography } from "../Typogrphy/Typography";

import * as S from "./ProductCard.style";

type Props = {
  product: ProductType;
};

export const ProductCard = (props: Props) => {
  const { product } = props;
  return (
    <Link to={`/product/${props.product.id}`}>
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
        <Typography variant="h4" color="#404042">
          {product.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </Typography>
        <Button onClick={() => {}}>Add to cart</Button>
      </Card>
    </Link>
  );
};
