import { useBaseRequest } from "./useBaseRequest";
import { API_BASE_URL } from "../utils/constants";
import { useQuery } from "react-query";
import { ProductsDataType } from "../models/ProductsDataType";

export const useProductDetail = (productId: string | undefined) => {
  const { data: ref, isLoading: isLoadingBaseRequest } = useBaseRequest();
  const getProduct = async (signal: AbortSignal | undefined) => {
    const response = await fetch(
      `${API_BASE_URL}/documents/search?ref=${ref}&q=${encodeURIComponent(
        `[[at(document.id, "${productId}")]]`
      )}`,
      {
        signal,
      }
    );
    const data: ProductsDataType = await response.json();
    if (data && data.results) {
      const product = data.results?.map((result) => ({
        id: result.id,
        name: result.data.name,
        sku: result.data.sku,
        imageUrl: result.data.mainimage.url,
        category: result.data.category.id,
        stock: result.data.stock,
        price: result.data.price,
        images: result.data.images?.map((image) => image.image.url) || [],
        description:
          (result.data.description && result.data.description[0]?.text) || "",
        tags: result.tags || [],
        categoryName: result.data.category.type,
      }));

      if (product[0]) {
        return product[0];
      } else {
        throw new Error("Product not found");
      }
    }
  };

  const { data, isLoading } = useQuery(
    ["product_detail", productId],
    async ({ signal }) => getProduct(signal),
    {
      enabled: !!ref,
    }
  );

  return { data, isLoading: isLoading || isLoadingBaseRequest };
};
