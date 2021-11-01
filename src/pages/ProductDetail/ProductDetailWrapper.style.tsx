import styled from "styled-components";
import { BREAKPOINTS } from "../../utils/variables";

export const ProductDetailWrapper = styled.div`
  display: grid;
  padding: 16px;

  grid-template-areas:
    "product-info product-info"
    "product-image product-image"
    "button button"
    "product-description product-description";

  @media ${BREAKPOINTS.TABLET} {
    grid-template-areas:
      "product-info button"
      "product-image product-description";
    grid-template-columns: auto auto;
  }

  @media ${BREAKPOINTS.DESKTOP} {
    grid-template-areas:
      "product-info button"
      "product-image product-description";
  }
`;

export const ProductInfoWrapper = styled.div`
  grid-area: product-info;
  position: relative;
`;

export const ProductImageWrapper = styled.div`
  grid-area: product-image;
`;

export const ButtonWrapper = styled.div`
  padding: 8px;
  grid-area: button;
`;
export const ProductDescription = styled.div`
  grid-area: product-description;
  padding: 8px;
`;
