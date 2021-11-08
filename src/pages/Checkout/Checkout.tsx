import React, { useMemo } from "react";
import { useAppSelector } from "../../AppStore";
import { Button } from "../../components/Button/Button";
import { CartItem } from "../../components/CartItem/CartItem";
import { CheckoutForm } from "../../components/CheckoutForm/CheckoutForm";
import { Layout } from "../../components/Layout/Layout";
import { NoCartItems } from "../../components/NoCartItems/NoCartItems";
import { Typography } from "../../components/Typogrphy/Typography";
import { useNavigation } from "../../hooks/useNavigation";

import * as S from "./Checkout.style";

export const Checkout = () => {
  const { navigateTo } = useNavigation();

  const cartItems = useAppSelector((state) => state.cart);
  const total = useMemo(
    () =>
      cartItems.reduce((prev, current, idx, array) => {
        return array[idx].product.price * array[idx].quantity + prev;
      }, 0),
    [cartItems]
  );

  if (cartItems.length === 0) {
    return (
      <Layout>
        <NoCartItems />
      </Layout>
    );
  }

  return (
    <Layout>
      <Typography variant="h3">Checkout</Typography>
      <CheckoutForm />
      <S.SummaryWrapper>
        <Typography variant="h3">Summary - Total (${total})</Typography>
        {cartItems.map((item) => (
          <CartItem cartItem={item} />
        ))}
      </S.SummaryWrapper>
      <S.Buttons>
        <Button onClick={() => navigateTo("/cart")}>Go back to cart</Button>
        <Button onClick={() => {}}>Place Order</Button>
      </S.Buttons>
    </Layout>
  );
};
