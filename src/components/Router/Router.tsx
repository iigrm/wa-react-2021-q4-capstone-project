import { CustomRouter } from "./CustomRouter";
import { RouterProvider } from "./Router.context";

export const Router = () => {
  return (
    <RouterProvider>
      <CustomRouter />
    </RouterProvider>
  );
};
