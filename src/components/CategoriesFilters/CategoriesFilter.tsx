import React from "react";
import { getCategories } from "../../services/categories";
import { ButtonLink } from "../ButtonLink/ButtonLink";

export const CategoriesFilters = () => {
  const categories = getCategories();

  return (
    <>
      {categories.map((category) => (
        <ButtonLink onClick={() => console.log("category")}>
          {category.name}
        </ButtonLink>
      ))}
    </>
  );
};
