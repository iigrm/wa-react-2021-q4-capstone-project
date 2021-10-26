import React from "react";
import { getCategories } from "../../services/categories";
import { ButtonLink } from "../ButtonLink/ButtonLink";
import { Typography } from "../Typogrphy/Typography";

import * as S from "./CategoriesFilter.style";

type Props = {
  onSelectFilter: (filter: string) => void;
  filters: string[];
};

export const CategoriesFilters = (props: Props) => {
  const categories = getCategories();

  return (
    <div>
      <Typography variant="h4">Filters</Typography>

      <S.CategoriesFilterContainerWrapper>
        <Typography variant="h6">By category</Typography>

        <S.CategoriesFilterItemsWrapper>
          {categories.map((category) => (
            <S.CategoriesFiltersButtonWrapper key={category.id}>
              <ButtonLink
                onClick={() => props.onSelectFilter(category.id)}
                key={category.id}
              >
                {props.filters.indexOf(category.id) > -1 ? (
                  <S.CategorySelected>{category.name}</S.CategorySelected>
                ) : (
                  category.name
                )}
              </ButtonLink>
            </S.CategoriesFiltersButtonWrapper>
          ))}
        </S.CategoriesFilterItemsWrapper>
      </S.CategoriesFilterContainerWrapper>
    </div>
  );
};
