import React from "react";
import { Link } from "react-router-dom";

import { ProductType } from "../../models/ProductType";
import { Card } from "../Card/Card";
import { Typography } from "../Typogrphy/Typography";

import * as S from "./ProductCard.style";
import { AddTocartButton } from "../AddToCartButton/AddToCartButton";
import { formatPrice } from "../../utils/products";

type Props = {
  product: ProductType;
};

export const ProductCard = (props: Props) => {
  const { product } = props;
  return (
    <Card height={300} width={200}>
      <Link to={`/product/${props.product.id}`}>
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
          {formatPrice(product.price)}
        </Typography>
      </Link>
      <AddTocartButton product={product} />
    </Card>
  );
};
