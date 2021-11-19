import React from "react";
import { server } from "../../../mockServer";
import { render, waitFor, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "../../../App";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Search", () => {
  it("Type in search  bar and click on button should render search page", async () => {
    window.history.pushState({}, "Home", "/");
    render(<App />);

    await waitFor(() => screen.getByTestId("search-input"));
    fireEvent.change(screen.getByTestId("search-input"), {
      target: { value: "Sofa" },
    });

    fireEvent.click(screen.getByTestId("search-button"));
    await waitFor(() => screen.getByTestId("search-results"));

    expect(screen.getByTestId("search-results")).toBeInTheDocument();
  });

  it("Render results section when there is no results", async () => {
    window.history.pushState({}, "Search list", "/search?q=Sofa");
    render(<App />);

    await waitFor(() => screen.getByTestId("search-results"));
    expect(screen.getByTestId("search-results")).toBeInTheDocument();
  });

  it("Render no results section when there is no results", async () => {
    window.history.pushState({}, "Search list", "/search?q=Unknown%20item");
    render(<App />);

    await waitFor(() => screen.getByTestId("search-no-results"));
    expect(screen.getByTestId("search-no-results")).toBeInTheDocument();
  });
});
