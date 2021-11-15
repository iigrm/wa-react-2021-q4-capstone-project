import React from "react";
import { useFeaturedCategories } from "../../hooks/useFeaturedCategories";
import { ButtonLink } from "../ButtonLink/ButtonLink";
import { SkeletonShimmer } from "../SkeletonShimmer/SkeletonShimmer";
import { Typography } from "../Typogrphy/Typography";

import * as S from "./CategoriesFilter.style";

type Props = {
  onSelectFilter: (filter: string) => void;
  onClearFilter: () => void;
  filters: string[];
};

export const CategoriesFilters = (props: Props) => {
  const { data, isLoading } = useFeaturedCategories();

  if (isLoading) <SkeletonShimmer height="400px" width="100%" />;
  return (
    <>
      {data && !isLoading && (
        <div>
          <Typography variant="h4">Filters</Typography>

          <S.CategoriesFilterContainerWrapper>
            <Typography variant="h6">By category</Typography>

            <S.CategoriesFilterItemsWrapper>
              {data.map((category) => (
                <S.CategoriesFiltersButtonWrapper
                  key={category.slug}
                  data-testid="category-filter"
                >
                  <ButtonLink
                    onClick={() => props.onSelectFilter(category.slug)}
                    key={category.id}
                  >
                    {props.filters.indexOf(category.slug) > -1 ? (
                      <S.CategorySelected>{category.name}</S.CategorySelected>
                    ) : (
                      category.name
                    )}
                  </ButtonLink>
                </S.CategoriesFiltersButtonWrapper>
              ))}

              <ButtonLink onClick={() => props.onClearFilter()}>
                <b>
                  <Typography variant="h3" align="center">
                    Clear All
                  </Typography>
                </b>
              </ButtonLink>
            </S.CategoriesFilterItemsWrapper>
          </S.CategoriesFilterContainerWrapper>
        </div>
      )}
    </>
  );
};
