import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "../../pages/Home/Home";
import { NotFound } from "../../pages/NotFound/NotFound";
import { ProductDetail } from "../../pages/ProductDetail/ProductDetail";
import { ProductList } from "../../pages/ProductList/ProductList";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/products">
          <ProductList />
        </Route>
        <Route exact path={["/", "/home"]}>
          <Home />
        </Route>
        <Route exact path="/product/:productid">
          <ProductDetail />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
