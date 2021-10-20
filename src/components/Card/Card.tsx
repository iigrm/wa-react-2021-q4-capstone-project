import React from "react";
import { CardWrapper } from "./Card.style";

type Props = {
  children: JSX.Element | JSX.Element[];
  height: number;
  width: number;
};

export const Card = (props: Props) => {
  return (
    <CardWrapper height={props.width} width={props.width}>
      {props.children}
    </CardWrapper>
  );
};
