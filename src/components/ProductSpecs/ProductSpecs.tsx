import React from "react";
import { ProductType } from "../../models/ProductType";
import { Typography } from "../Typogrphy/Typography";

import * as S from "./ProductSpecs.style";

type Props = {
  product: ProductType;
};

export const ProductSpecs = (props: Props) => {
  return (
    <S.ProductSpecs>
      <Typography variant="h4">Specs</Typography>
      <S.Table>
        <S.TR>
          <th>Spec name</th>
          <th>Spec value</th>
        </S.TR>
        {props.product.specs?.map((spec) => (
          <S.TR>
            <td>{spec.specName}</td> <td>{spec.specValue}</td>
          </S.TR>
        ))}
      </S.Table>
    </S.ProductSpecs>
  );
};
