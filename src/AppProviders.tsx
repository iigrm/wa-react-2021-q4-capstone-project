import React from "react";
import { store } from "./AppStore";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export const AppProviders = (props: Props) => {
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>{props.children}</BrowserRouter>
      </QueryClientProvider>
    </Provider>
  );
};
