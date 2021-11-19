import React from "react";

import * as S from "./ButtonLink.style";

type Props = {
  children: string | JSX.Element | JSX.Element[];
  onClick: () => void;
  disabled?: boolean;
  "data-testid"?: string;
};

export const ButtonLink = (props: Props) => {
  return (
    <S.ButtonLink
      disabled={props.disabled}
      onClick={props.onClick}
      data-testid={props["data-testid"]}
    >
      {props.children}
    </S.ButtonLink>
  );
};
