import React from "react";
import { ButtonLink } from "../ButtonLink/ButtonLink.style";
import * as S from "./Pagination.style";

export const Pagination = () => {
  const numberOfPages = 10;
  const items = new Array(numberOfPages);
  items.fill(1);
  return (
    <S.PaginationWrapper>
      <ButtonLink>
        <S.ItemWrapper>Start</S.ItemWrapper>
      </ButtonLink>
      <ButtonLink>
        <S.ItemWrapper>Prev</S.ItemWrapper>
      </ButtonLink>
      {items.map((n, idx) => (
        <ButtonLink key={`pagination_${idx}`}>
          <S.ItemWrapper>{idx}</S.ItemWrapper>
        </ButtonLink>
      ))}
      <ButtonLink>
        <S.ItemWrapper>Next</S.ItemWrapper>
      </ButtonLink>
      <ButtonLink>
        <S.ItemWrapper>End</S.ItemWrapper>
      </ButtonLink>
    </S.PaginationWrapper>
  );
};
