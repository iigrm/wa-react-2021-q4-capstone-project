import React from "react";

import * as S from "./Input.style";

type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
  name: string;
  "data-testid"?: string;
};

export const Input = (props: Props) => {
  return (
    <S.Input
      onChange={props.onChange}
      value={props.value}
      placeholder={props.placeholder}
      name={props.name}
      data-testid={props["data-testid"]}
    />
  );
};
