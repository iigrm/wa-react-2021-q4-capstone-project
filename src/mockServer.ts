// src/mocks.js
import { rest } from "msw";
import { setupServer } from "msw/node";
import { API_BASE_URL } from "../src/utils/constants";
import baseResponse from "../src/mocks/base.json";
import bannersResponse from "../src/mocks/en-us/featured-banners.json";
import categoriesResponse from "../src/mocks/en-us/product-categories.json";
import productsResponse from "../src/mocks/en-us/products.json";
import featuredProdcts from "../src/mocks/en-us/featured-products.json";
import productDetail from "../src/mocks/productDetail.json";
import productDetailEmpty from "../src/mocks/productDetailEmpty.json";
import search from "../src/mocks/search.json";
import searchEmpty from "../src/mocks/searchEmpty.json";

export const server = setupServer(
  rest.get(API_BASE_URL, (req, res, ctx) => {
    return res(ctx.json(baseResponse));
  }),
  rest.get(`${API_BASE_URL}/documents/search`, (req, res, ctx) => {
    const query = req.url.searchParams.getAll("q").toString();
    switch (true) {
      case query.includes("banner"):
        return res(ctx.json(bannersResponse));
      case query.includes("category"):
        return res(ctx.json(categoriesResponse));
      case query.includes("fulltext"):
        if (query.includes("Unknown item")) {
          return res(ctx.json(searchEmpty));
        }
        return res(ctx.json(search));
      case query.includes("product") && query.includes("Featured"):
        return res(ctx.json(featuredProdcts));
      case query.includes("product"):
        const page = parseInt(req.url.searchParams.get("page") || "1");
        productsResponse.page = page;
        return res(ctx.json(productsResponse));
      case query.includes("document.id"):
        if (query.includes("YWJAdRIAAC4Ay5sY")) {
          return res(ctx.json(productDetailEmpty));
        }
        return res(ctx.json(productDetail));
      default:
        return res(ctx.json({}));
    }
  })
);
