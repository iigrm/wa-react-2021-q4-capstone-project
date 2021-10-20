import React from "react";
import { Input } from "../Input/Input";
import { Logo } from "../Logo/Logo";
import { CartButton } from "../CartButton/CartButton";

import * as S from "./Header.style";

export const Header = () => {
  return (
    <S.HeaderWrapper>
      <Logo />
      <Input />
      <CartButton />
    </S.HeaderWrapper>
  );
};
