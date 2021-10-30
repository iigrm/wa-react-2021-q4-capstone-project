import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "../../pages/Home/Home";
import { NotFound } from "../../pages/NotFound/NotFound";
import { ProductList } from "../../pages/ProductList/ProductList";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/products">
          <ProductList />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
