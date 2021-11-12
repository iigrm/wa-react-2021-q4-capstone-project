import styled from "styled-components";
import { BREAKPOINTS } from "../../utils/variables";

export const ProductDetailWrapper = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;

  @media ${BREAKPOINTS.DESKTOP} {
    flex-direction: row;
  }
`;

export const ProductInfoWrapper = styled.div`
  grid-area: product-info;
  position: relative;
`;

export const ProductImageWrapper = styled.div`
  width: 100%;
  @media ${BREAKPOINTS.DESKTOP} {
    min-width: 60%;
  }
`;

export const ButtonWrapper = styled.div`
  padding: 24px 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;
export const ProductDescription = styled.div`
  grid-area: product-description;
  padding: 8px;
`;
