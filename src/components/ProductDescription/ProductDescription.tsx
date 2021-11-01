import React from "react";
import { ProductType } from "../../models/ProductType";
import { Typography } from "../Typogrphy/Typography";

type Props = {
  product: ProductType;
};
export const ProductDescription = (props: Props) => {
  return (
    <>
      <Typography variant="h4">Description: </Typography>
      <Typography variant="h6" color="#666">
        {props.product.description}
      </Typography>
    </>
  );
};
