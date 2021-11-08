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
        <thead>
          <S.TR>
            <th>Spec name</th>
            <th>Spec value</th>
          </S.TR>
        </thead>
        <tbody>
          {props.product.specs?.map((spec) => (
            <S.TR key={`specs_${spec.specName}`}>
              <td>{spec.specName}</td> <td>{spec.specValue}</td>
            </S.TR>
          ))}
        </tbody>
      </S.Table>
    </S.ProductSpecs>
  );
};
