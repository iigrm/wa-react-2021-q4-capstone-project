import React from "react";
import { server } from "../../../mockServer";
import { render, waitFor, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import "@testing-library/jest-dom";

import App from "../../../App";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Cart", () => {
  it("Should show empty msg when the cart is empty", async () => {
    window.history.pushState({}, "Cart", "/cart");
    render(<App />);

    await waitFor(() => screen.getByTestId("cart-empty"));
    expect(screen.getByTestId("cart-empty")).toBeInTheDocument();
  });

  it("Should show items when cart is not empty", async () => {
    window.history.pushState({}, "Products", "/products");
    render(<App />);

    await waitFor(() => screen.getByTestId("results-page-number"));
    fireEvent.click(
      screen.getAllByTestId("product-card-add-to-cart-button")[0]
    );

    fireEvent.click(
      screen.getAllByTestId("product-card-add-to-cart-button")[1]
    );

    fireEvent.click(screen.getByTestId("cart-button"));
    await waitFor(() => screen.getAllByTestId("cart-item"));
    expect(screen.getAllByTestId("cart-item")[0]).toBeInTheDocument();
    expect(
      screen.getAllByTestId("cart-item-product-price")[0]
    ).toBeInTheDocument();
    expect(
      screen.getAllByTestId("cart-item-product-image")[0]
    ).toBeInTheDocument();
    expect(
      screen.getAllByTestId("cart-item-product-sku")[0]
    ).toBeInTheDocument();
    expect(screen.getAllByTestId("cart-item-quantity")[0]).toBeInTheDocument();

    expect(screen.getAllByTestId("cart-item").length).toBe(2);
  });

  it("When click on remove should remove one item", async () => {
    window.history.pushState({}, "Products", "/products");
    render(<App />);

    await waitFor(() => screen.getByTestId("results-page-number"));
    fireEvent.click(
      screen.getAllByTestId("product-card-add-to-cart-button")[0]
    );

    fireEvent.click(
      screen.getAllByTestId("product-card-add-to-cart-button")[1]
    );

    fireEvent.click(screen.getByTestId("cart-button"));
    await waitFor(() => screen.getAllByTestId("cart-item"));
    expect(screen.getAllByTestId("cart-item")[0]).toBeInTheDocument();
    expect(screen.getAllByTestId("cart-item").length).toBe(2);

    fireEvent.click(screen.getAllByTestId("cart-item-remove")[0]);

    expect(screen.getAllByTestId("cart-item").length).toBe(1);
  });

  it("The total should be the sum of all subtotals", async () => {
    window.history.pushState({}, "Products", "/products");
    render(<App />);

    await waitFor(() => screen.getByTestId("results-page-number"));
    fireEvent.click(
      screen.getAllByTestId("product-card-add-to-cart-button")[0]
    );

    fireEvent.click(
      screen.getAllByTestId("product-card-add-to-cart-button")[1]
    );

    fireEvent.click(screen.getByTestId("cart-button"));
    await waitFor(() => screen.getAllByTestId("cart-item"));
    const total = screen
      .getAllByTestId("cart-item-product-subtotal")
      .reduce((prev, current, idx, array) => {
        return parseFloat(array[idx].innerHTML.replace(/[^0-9-.]/g, "")) + prev;
      }, 0);

    const totalFromItem = parseFloat(
      screen.getByTestId("cart-total").innerHTML.replace(/[^0-9-.]/g, "")
    );

    expect(total).toBe(totalFromItem);
  });

  it("The total should be the sum of all subtotals after update a quantity", async () => {
    window.history.pushState({}, "Products", "/products");
    render(<App />);

    await waitFor(() => screen.getByTestId("results-page-number"));
    fireEvent.click(
      screen.getAllByTestId("product-card-add-to-cart-button")[0]
    );

    fireEvent.click(
      screen.getAllByTestId("product-card-add-to-cart-button")[1]
    );

    fireEvent.click(screen.getByTestId("cart-button"));

    await waitFor(() => screen.getAllByTestId("cart-item"));

    const firstTotal = screen
      .getAllByTestId("cart-item-product-subtotal")
      .reduce((prev, current, idx, array) => {
        return parseFloat(array[idx].innerHTML.replace(/[^0-9-.]/g, "")) + prev;
      }, 0);

    const firstTotalFromItem = parseFloat(
      screen.getByTestId("cart-total").innerHTML.replace(/[^0-9-.]/g, "")
    );

    userEvent.selectOptions(
      screen.getAllByTestId("cart-item-select-quantity")[0],
      "2"
    );

    const finalTotal = screen
      .getAllByTestId("cart-item-product-subtotal")
      .reduce((prev, current, idx, array) => {
        return parseFloat(array[idx].innerHTML.replace(/[^0-9-.]/g, "")) + prev;
      }, 0);

    const fintalTotalFromItem = parseFloat(
      screen.getByTestId("cart-total").innerHTML.replace(/[^0-9-.]/g, "")
    );

    expect(finalTotal).toBe(fintalTotalFromItem);
    expect(fintalTotalFromItem).not.toBe(firstTotalFromItem);
  });
});
