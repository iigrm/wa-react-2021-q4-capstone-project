import styled from "styled-components";
import { BREAKPOINTS } from "../../utils/variables";

export const ProductListWrapper = styled.div`
  display: grid;
  grid-template-areas:
    "categories categories"
    "products products";

  @media ${BREAKPOINTS.DESKTOP} {
    font-size: 20px;
  }

  @media ${BREAKPOINTS.DESKTOP} {
    grid-template-areas:
      "categories products"
      "categories products";
  }
`;

export const CategoriesFilterWrapper = styled.div`
  grid-area: categories;
  padding: 16px;
`;

export const ProductsWrapper = styled.div`
  grid-area: products;
  padding: 16px;
`;
