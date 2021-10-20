import React from "react";

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as S from "./CartButton.style";

export const CartButton = () => {
  return (
    <S.CartButtonWrapper>
      <FontAwesomeIcon icon={faShoppingCart} />
    </S.CartButtonWrapper>
  );
};
