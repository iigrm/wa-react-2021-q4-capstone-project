import React, { useEffect } from "react";
import { Home } from "../../pages/Home/Home";
import { ProductList } from "../../pages/ProductList/ProductList";
import { useRouterContext } from "./Router.context";

export const CustomRouter = () => {
  const { route } = useRouterContext();

  useEffect(() => {
    console.log("change route", route);
  }, [route]);

  switch (route) {
    default:
    case "/":
      return <Home />;
    case "/products":
      return <ProductList />;
  }
};
