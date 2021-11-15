import React from "react";
import * as S from "./Typography.style";

type Props = {
  variant?: "h1" | "h6" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  children: React.ReactNode;
  color?: string;
  align?: "center" | "left" | "right";
  "data-testid"?: string;
};

export const Typography = (props: Props) => {
  switch (props.variant) {
    default:
    case "h1":
      return (
        <S.H1
          color={props.color}
          align={props.align}
          data-testid={props["data-testid"]}
        >
          {props.children}
        </S.H1>
      );
    case "h2":
      return (
        <S.H2
          color={props.color}
          align={props.align}
          data-testid={props["data-testid"]}
        >
          {props.children}
        </S.H2>
      );
    case "h3":
      return (
        <S.H3
          color={props.color}
          align={props.align}
          data-testid={props["data-testid"]}
        >
          {props.children}
        </S.H3>
      );
    case "h4":
      return (
        <S.H4
          color={props.color}
          align={props.align}
          data-testid={props["data-testid"]}
        >
          {props.children}
        </S.H4>
      );
    case "h5":
      return (
        <S.H5
          color={props.color}
          align={props.align}
          data-testid={props["data-testid"]}
        >
          {props.children}
        </S.H5>
      );
    case "h6":
      return (
        <S.H6
          color={props.color}
          align={props.align}
          data-testid={props["data-testid"]}
        >
          {props.children}
        </S.H6>
      );
    case "p":
      return (
        <S.P
          color={props.color}
          align={props.align}
          data-testid={props["data-testid"]}
        >
          {props.children}
        </S.P>
      );
    case "span":
      return (
        <S.Span
          color={props.color}
          align={props.align}
          data-testid={props["data-testid"]}
        >
          {props.children}
        </S.Span>
      );
  }
};
