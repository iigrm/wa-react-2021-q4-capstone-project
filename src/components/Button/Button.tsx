import React from "react";
import * as S from "./Button.style";
type Props = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: JSX.Element | string | JSX.Element[];
  "data-testid"?: string;
  disabled?: boolean;
};

export const Button = (props: Props) => {
  return (
    <S.Button
      data-testid={props["data-testid"]}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </S.Button>
  );
};
