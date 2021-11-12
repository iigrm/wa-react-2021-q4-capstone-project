import React from "react";
import { Link } from "react-router-dom";
import NoCartImage from "../../assets/cartempty.png";

import * as S from "./NoCartItems.style";

export const NoCartItems = () => {
  return (
    <S.NoCartItemsWrapper>
      <h1>
        Your cart is empty please browse in <Link to="/products">products</Link>
        :)
      </h1>
      <S.NoCartImage src={NoCartImage} />
    </S.NoCartItemsWrapper>
  );
};
