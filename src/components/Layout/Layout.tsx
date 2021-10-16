import React from "react";
import { Header } from "../Header/Header";

type Props = {
  children: JSX.Element;
};

export const Layout = (props: Props) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};
