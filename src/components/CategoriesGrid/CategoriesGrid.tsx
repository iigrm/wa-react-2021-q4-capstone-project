import React from "react";
import { CategoryType } from "../../models/CategoryType";
import { CategoryCard } from "../CategoyCard/CategoryCard";

import * as S from "./CategoriesGrid.style";

type Props = {
  categories: CategoryType[];
};

export const CategoriesGrid = (props: Props) => {
  return (
    <S.CategoriesGridWrapper>
      {props.categories.map((category, idx) => (
        <CategoryCard category={category} key={`category_grid_${idx}`} />
      ))}
    </S.CategoriesGridWrapper>
  );
};
