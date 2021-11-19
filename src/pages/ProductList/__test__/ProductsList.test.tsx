import React from "react";
import { server } from "../../../mockServer";
import { render, waitFor, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import mockProducts from "../../../mocks/en-us/products.json";
import App from "../../../App";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("ProductList", () => {
  it("Render categories in filter", async () => {
    window.history.pushState({}, "ProductList", "/products");
    render(<App />);

    await waitFor(() => screen.getAllByTestId("category-filter"));
    expect(screen.getAllByTestId("category-filter")[0]).toBeInTheDocument();
  });

  it("The number of pagination should be the maximum returned in request", async () => {
    window.history.pushState({}, "ProductList", "/products");
    render(<App />);

    await waitFor(() => screen.getAllByTestId("pagination-number-button"));
    expect(screen.getAllByTestId("pagination-number-button").length).toEqual(
      mockProducts.total_pages
    );
  });

  it("The prev button should be disabled on first page", async () => {
    window.history.pushState({}, "ProductList", "/products");
    render(<App />);

    await waitFor(() => screen.getByTestId("pagination-prev-button"));
    expect(screen.getByTestId("pagination-prev-button")).toBeDisabled();
  });

  it("The next button should move to next page", async () => {
    window.history.pushState({}, "ProductList", "/products");
    render(<App />);

    await waitFor(() => screen.getByTestId("pagination-next-button"));
    fireEvent.click(screen.getByTestId("pagination-next-button"));
    await waitFor(() => screen.getByTestId("results-page-number"));
    expect(screen.getByTestId("results-page-number").innerHTML).toBe(
      "Showing page: 2"
    );
  });

  it("The next button sould be disabled on last page", async () => {
    window.history.pushState({}, "ProductList", "/products?page=2");
    render(<App />);

    await waitFor(() => screen.getByTestId("pagination-end-button"));
    fireEvent.click(screen.getByTestId("pagination-end-button"));
    await waitFor(() => screen.getByTestId("results-page-number"));
    expect(screen.getByTestId("results-page-number").innerHTML).toBe(
      `Showing page: ${mockProducts.total_pages}`
    );

    await waitFor(() => screen.getByTestId("pagination-next-button"));
    expect(screen.getByTestId("pagination-next-button")).toBeDisabled();
  });
});
