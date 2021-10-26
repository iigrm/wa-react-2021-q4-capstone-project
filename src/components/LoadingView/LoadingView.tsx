import React from "react";
import { Typography } from "../Typogrphy/Typography";
import * as S from "./LoadingView.style";
import LoadingImage from "../../assets/loading.gif";

export const LoadingView = () => {
  return (
    <S.LoadingWrapper>
      <S.LoadingInner>
        <img src={LoadingImage} alt="loading" height="96" width="96" />
        <Typography variant="h1">Loading ...</Typography>
      </S.LoadingInner>
    </S.LoadingWrapper>
  );
};
