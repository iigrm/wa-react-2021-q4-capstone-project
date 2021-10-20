import React from "react";
import { CategoryType } from "../../models/CategoryType";
import { Card } from "../Card/Card";
import { Typography } from "../Typogrphy/Typography";

import * as S from "./CategoryCard.style";

type Props = {
  category: CategoryType;
};

export const CategoryCard = (props: Props) => {
  return (
    <Card height={100} width={200}>
      <S.CategoryCardImage src={props.category.imageUrl} loading="lazy" />
      <Typography variant="h4">{props.category.name}</Typography>
    </Card>
  );
};
