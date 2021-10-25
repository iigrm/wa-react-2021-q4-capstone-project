import styled from "styled-components";
import { BREAKPOINTS } from "../../utils/variables";

export const CategoriesFilterContainerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media ${BREAKPOINTS.DESKTOP} {
    flex-direction: column;
  }
`;

export const CategoriesFilterItemsWrapper = styled.div`
  display: flex;
  @media ${BREAKPOINTS.DESKTOP} {
    flex-direction: column;
  }
`;

export const CategoriesFiltersButtonWrapper = styled.div`
  padding: 8px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${BREAKPOINTS.DESKTOP} {
    padding: 16px 0;
  }
`;

export const CategorySelected = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: rgba(30, 68, 199, 1);
`;
