import { ProductsDataType } from "../models/ProductsDataType";
import { ProductType } from "../models/ProductType";

export const parseProducts = (productInput: ProductsDataType) => {
  const parsedProducts: ProductType[] =
    productInput.results?.map((result) => ({
      id: result.id,
      name: result.data.name,
      sku: result.data.sku,
      imageUrl: result.data.mainimage.url,
      category: result.data.category.id,
      stock: result.data.stock,
      price: result.data.price,
      images: result.data.images?.map((image) => image.image.url) || [],
      categorySlug: result.data.category.slug,
      tags: result.tags || [],
      description:
        (result.data.description && result.data.description[0]?.text) || "",
      specs: result.data.specs?.map((spec) => ({
        specName: spec.spec_name,
        specValue: spec.spec_value,
      })),
    })) || [];

  return {
    products: parsedProducts,
    pagination: {
      totalPages: productInput.total_pages,
      page: productInput.page,
      totalResults: productInput.total_results_size,
    },
  };
};

export const formatPrice = (price: number) => {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};
