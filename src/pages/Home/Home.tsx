import React from "react";
import { Layout } from "../../components/Layout/Layout";
import BANNERS from "../../mocks/es-mx/featured-banners.json";

export const Home = () => {
  console.log(BANNERS);
  return (
    <Layout>
      <h1>Some Layout</h1>
    </Layout>
  );
};
