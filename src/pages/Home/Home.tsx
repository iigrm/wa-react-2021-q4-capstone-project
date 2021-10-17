import React from "react";
import { Layout } from "../../components/Layout/Layout";
import { BannerSlider } from "../../components/BannerSlider/BannerSlider";
import { Categories } from "../../components/Categories/Categories";

export const Home = () => {
  return (
    <Layout>
      <BannerSlider />
      <Categories />
    </Layout>
  );
};
