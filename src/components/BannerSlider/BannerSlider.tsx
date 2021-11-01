import React from "react";
import { useBanners } from "../../hooks/useBanners";

import { SkeletonShimmer } from "../SkeletonShimmer/SkeletonShimmer";
import { Slider } from "../Slider/Slider";
export const BannerSlider = () => {
  const { isLoading, data } = useBanners();

  if (isLoading) return <SkeletonShimmer width="100%" height="400px" />;
  return <>{!isLoading && <Slider items={data || []} />} </>;
};
