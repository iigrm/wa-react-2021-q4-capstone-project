import React, { useState } from "react";
import { Logo } from "../Logo/Logo";
import { CartButton } from "../CartButton/CartButton";
import { ButtonLink } from "../ButtonLink/ButtonLink.style";
import { Typography } from "../Typogrphy/Typography";
import { useHistory, useLocation } from "react-router";

import * as S from "./Header.style";

export const Header = () => {
  const history = useHistory();
  const search = useLocation().search;
  const searchParam = new URLSearchParams(search);
  const searchTerm = searchParam.get("q") || "";

  const [value, setValue] = useState(searchTerm);

  const handleClick = () => {
    history.push({ pathname: "/search", search: `?q=${value}` });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target) {
      setValue(event?.target.value);
    }
  };

  return (
    <S.HeaderWrapper>
      <Logo />
      <S.Input
        onChange={handleChange}
        value={value}
        placeholder="Search for anything"
      />
      <ButtonLink onClick={handleClick}>
        <Typography variant="h5" color="white">
          Search
        </Typography>
      </ButtonLink>
      <CartButton />
    </S.HeaderWrapper>
  );
};
