import React from "react";

import * as S from "./Categories.style";
import CATEGORIES from "../../mocks/es-mx/product-categories.json";
import { CategoriesGrid } from "../CategoriesGrid/CategoriesGrid";
import { CategoryType } from "../../models/CategoryType";

//TO-DO: A component to handle Titles

export const Categories = () => {
  const parsedCategories: CategoryType[] = CATEGORIES.results.map((result) => ({
    imageUrl: result.data.main_image.url,
    href: result.href,
    name: result.data.name,
  }));

  return (
    <S.CategoriesWrapper>
      <S.Title>Categories</S.Title>
      <CategoriesGrid categories={parsedCategories} />
    </S.CategoriesWrapper>
  );
};
