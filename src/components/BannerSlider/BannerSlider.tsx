import React from "react";
import { Slider } from "../Slider/Slider";

import BANNERS from "../../mocks/es-mx/featured-banners.json";

export const BannerSlider = () => {
  const parsedBanners = BANNERS.results.map((result) => ({
    imageUrl: result.data.main_image.url,
    href: result.href,
    title: result.data.title,
    description: result.data.description[0].text,
  }));

  return <Slider items={parsedBanners} />;
};
