import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "../../pages/Home/Home";
import { NotFound } from "../../pages/NotFound/NotFound";
import { ProductDetail } from "../../pages/ProductDetail/ProductDetail";
import { ProductList } from "../../pages/ProductList/ProductList";
import { Search } from "../../pages/Search/Search";
import { Cart } from "../../pages/Cart/Cart";
import { Checkout } from "../../pages/Checkout/Checkout";

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
        <Route exact path="/search">
          <Search />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
