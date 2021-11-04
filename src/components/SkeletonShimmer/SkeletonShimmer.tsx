import React from "react";
import * as S from "./SkeletonShimmer.style";

type Props = {
  height: string;
  width: string;
};

export const SkeletonShimmer = (props: Props) => {
  return <S.SkeletonWrapper height={props.height} width={props.width} />;
};
