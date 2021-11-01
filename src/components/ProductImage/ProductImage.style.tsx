import styled from "styled-components";
import { BREAKPOINTS } from "../../utils/variables";

export const ProductImageWrapper = styled.div`
  width: 100%;
  position: relative;
  @media ${BREAKPOINTS.TABLET} {
    width: 60%;
  }
  @media ${BREAKPOINTS.DESKTOP} {
    width: 60%;
  }
`;
