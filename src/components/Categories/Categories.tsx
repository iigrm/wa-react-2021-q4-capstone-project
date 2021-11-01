import React from "react";

import * as S from "./Categories.style";

import { CategoriesGrid } from "../CategoriesGrid/CategoriesGrid";
import { useFeaturedCategories } from "../../hooks/useFeaturedCategories";
import { SkeletonShimmer } from "../SkeletonShimmer/SkeletonShimmer";

export const Categories = () => {
  const { data, isLoading } = useFeaturedCategories();

  if (isLoading) <SkeletonShimmer width="100%" height="200px" />;

  return (
    <S.CategoriesWrapper>
      {data && !isLoading && (
        <>
          <S.Title>Categories</S.Title>
          <CategoriesGrid categories={data} />
        </>
      )}
    </S.CategoriesWrapper>
  );
};
