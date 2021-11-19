// __tests__/fetch.test.js
import React from "react";
import { server } from "../../../mockServer";
import { render, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "../../../App";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("Render banners,categories and featured products in Home when app starts", async () => {
  render(<App />);

  await waitFor(() => screen.getAllByTestId("slider-item"));
  await waitFor(() => screen.getByTestId("categories-title"));
  await waitFor(() => screen.getByTestId("featured-product-title"));
  expect(screen.getAllByTestId("slider-item")[0]).toBeInTheDocument();
  expect(screen.getByTestId("categories-title")).toBeInTheDocument();
  expect(screen.getByTestId("featured-product-title")).toBeInTheDocument();
});
