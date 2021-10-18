import React from "react";
import { CategoryType } from "../../models/CategoryType";
import { Card } from "../Card/Card";

import * as S from "./CategoryCard.style";

type Props = {
  category: CategoryType;
};

export const CategoryCard = (props: Props) => {
  return (
    <Card height={100} width={150}>
      <S.CategoryCardImage src={props.category.imageUrl} loading="lazy" />
      <S.CategoryName>{props.category.name}</S.CategoryName>
    </Card>
  );
};
