import React from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

import * as S from "./Layout.style";

type Props = {
  children: JSX.Element;
};

export const Layout = (props: Props) => {
  return (
    <>
      <Header />
      <S.ContentWrapper>{props.children}</S.ContentWrapper>
      <Footer />
    </>
  );
};
