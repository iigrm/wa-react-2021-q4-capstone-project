import React from "react";

import * as S from "./Categories.style";

import { CategoriesGrid } from "../CategoriesGrid/CategoriesGrid";
import { getCategories } from "../../services/categories";

export const Categories = () => {
  const categories = getCategories();

  return (
    <S.CategoriesWrapper>
      <S.Title>Categories</S.Title>
      <CategoriesGrid categories={categories} />
    </S.CategoriesWrapper>
  );
};
