import { useContext, useEffect } from "react";
import { useNavigation } from "../../hooks/useNavigation";
import { Home } from "../../pages/Home/Home";
import { ProductList } from "../../pages/ProductList/ProductList";
import { CustomRouter } from "./CustomRouter";
import RouterContext, { RouterProvider } from "./Router.context";

export const Router = () => {
  return (
    <RouterProvider>
      <CustomRouter />
    </RouterProvider>
  );
};
