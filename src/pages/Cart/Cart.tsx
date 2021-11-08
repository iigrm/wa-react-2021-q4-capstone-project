import React, { useMemo } from "react";
import { useAppSelector } from "../../AppStore";
import { Button } from "../../components/Button/Button";
import { ButtonLink } from "../../components/ButtonLink/ButtonLink";
import { CartItem } from "../../components/CartItem/CartItem";
import { Layout } from "../../components/Layout/Layout";
import { NoCartItems } from "../../components/NoCartItems/NoCartItems";
import { Typography } from "../../components/Typogrphy/Typography";
import { useNavigation } from "../../hooks/useNavigation";
import { formatPrice } from "../../utils/products";
import { clearItems } from "../../pages/Cart/CartSlice";
import { useAppDispatch } from "../../AppStore";

import * as S from "./Cart.style";

export const Cart = () => {
  const { navigateTo } = useNavigation();
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart);
  const total = useMemo(
    () =>
      cartItems.reduce((prev, current, idx, array) => {
        return array[idx].product.price * array[idx].quantity + prev;
      }, 0),
    [cartItems]
  );

  const handleClearItems = () => {
    dispatch(clearItems());
  };

  if (cartItems.length === 0) {
    return (
      <Layout>
        <NoCartItems />
      </Layout>
    );
  }

  return (
    <Layout>
      <>
        <h1>Shopping Cart</h1>
        <ButtonLink onClick={handleClearItems}>Remove all</ButtonLink>
        {cartItems.map((item) => (
          <CartItem cartItem={item} quantityEditable />
        ))}
        <S.TotalWrapper>
          <Button
            onClick={() => {
              navigateTo("/checkout");
            }}
          >
            Proceed to checkout
          </Button>
          <Typography variant="h2">Total: {formatPrice(total)} </Typography>
        </S.TotalWrapper>
      </>
    </Layout>
  );
};
