import React, { useEffect, useState } from "react";
import { Home } from "../../pages/Home/Home";
import { ProductList } from "../../pages/ProductList/ProductList";
import { LoadingView } from "../LoadingView/LoadingView";
import { useRouterContext } from "./Router.context";

export const CustomRouter = () => {
  const { route } = useRouterContext();
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setShowSpinner(true);
    setTimeout(() => {
      setShowSpinner(false);
    }, 2000);
  }, [route]);

  const loadComponent = (Component: JSX.Element) => {
    return (
      <>
        {showSpinner && <LoadingView />}
        {Component}
      </>
    );
  };

  switch (route) {
    default:
    case "/":
      return loadComponent(<Home />);
    case "/products":
      return loadComponent(<ProductList />);
  }
};
