import React from "react";

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as S from "./CartButton.style";
import { useAppSelector } from "../../AppStore";
import { useNavigation } from "../../hooks/useNavigation";

export const CartButton = () => {
  const { navigateTo } = useNavigation();
  const numItems = useAppSelector((state) => state.cart.length);
  return (
    <S.CartButtonWrapper onClick={() => navigateTo("/cart")}>
      <FontAwesomeIcon icon={faShoppingCart} />
      {numItems > 0 && <S.Badge>{numItems}</S.Badge>}
    </S.CartButtonWrapper>
  );
};
