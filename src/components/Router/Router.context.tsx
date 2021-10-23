import React, { useState, createContext, useContext } from "react";

interface IRoute {
  route: string;
  changeRoute?: (route: string) => void;
}

const defaultState = {
  route: "/",
};

const RouterContext = createContext<IRoute>(defaultState);

export default RouterContext;

export const useRouterContext = () => useContext(RouterContext);

export const RouterProvider: React.FC = ({ children }) => {
  const [route, setRoute] = useState(defaultState.route);

  const changeRoute = (route: string) => {
    console.log("changeroute provider", route);
    setRoute(route);
  };

  console.log("value in provider", route);

  return (
    <RouterContext.Provider
      value={{
        route,
        changeRoute,
      }}
    >
      {children}
    </RouterContext.Provider>
  );
};
