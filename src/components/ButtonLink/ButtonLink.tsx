import React from "react";

import * as S from "./ButtonLink.style";

type Props = {
  children: string | JSX.Element | JSX.Element[];
  onClick: () => void;
};

export const ButtonLink = (props: Props) => {
  return <S.ButtonLink onClick={props.onClick}>{props.children}</S.ButtonLink>;
};
