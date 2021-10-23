import CATEGORIES from "../mocks/en-us/product-categories.json";
import { CategoryType } from "../models/CategoryType";

export const getCategories = () => {
  const parsedCategories: CategoryType[] = CATEGORIES.results.map((result) => ({
    imageUrl: result.data.main_image.url,
    href: result.href,
    name: result.data.name,
  }));
  return parsedCategories;
};
