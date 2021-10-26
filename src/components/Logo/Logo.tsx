import React from "react";
import LogoImage from "../../assets/logo7.png";
import { useNavigation } from "../../hooks/useNavigation";

import * as S from "./Logo.style";

export const Logo = () => {
  const { navigateTo } = useNavigation();
  return <S.LogoImg src={LogoImage} onClick={() => navigateTo("/")} />;
};
