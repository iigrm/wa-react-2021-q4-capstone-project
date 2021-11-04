import React from "react";
import * as S from "./Button.style";
type Props = {
  onClick: () => void;
  children: JSX.Element | string | JSX.Element[];
};

export const Button = (props: Props) => {
  return <S.Button onClick={props.onClick}>{props.children}</S.Button>;
};
