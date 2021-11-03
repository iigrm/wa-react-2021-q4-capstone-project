import React from "react";
import { ButtonLink } from "../ButtonLink/ButtonLink.style";
import * as S from "./Pagination.style";
type Props = {
  totalResults: number;
  totalPages: number;
  page: number;
  onSetPage: (page: number) => void;
};
export const Pagination = (props: Props) => {
  const { totalPages, page, onSetPage } = props;
  const items = new Array(totalPages);
  items.fill(1);
  return (
    <>
      {totalPages > 1 && (
        <S.PaginationWrapper>
          <ButtonLink>
            <S.ItemWrapper onClick={() => onSetPage(1)}>Start</S.ItemWrapper>
          </ButtonLink>
          <ButtonLink disabled={page === 1}>
            <S.ItemWrapper onClick={() => onSetPage(page - 1)}>
              Prev
            </S.ItemWrapper>
          </ButtonLink>
          {items.map((n, idx) => (
            <ButtonLink
              key={`pagination_${idx}`}
              onClick={() => onSetPage(idx + 1)}
            >
              <S.ItemWrapper selected={idx + 1 === page}>
                {idx + 1}
              </S.ItemWrapper>
            </ButtonLink>
          ))}
          <ButtonLink
            onClick={() => onSetPage(page + 1)}
            disabled={page === totalPages}
          >
            <S.ItemWrapper>Next</S.ItemWrapper>
          </ButtonLink>
          <ButtonLink onClick={() => onSetPage(totalPages)}>
            <S.ItemWrapper>End</S.ItemWrapper>
          </ButtonLink>
        </S.PaginationWrapper>
      )}
    </>
  );
};
