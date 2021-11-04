import { useBaseRequest } from "./useBaseRequest";
import { API_BASE_URL } from "../utils/constants";
import { useQuery } from "react-query";
import { ProductsDataType } from "../models/ProductsDataType";
import { parseProducts } from "../utils/products";

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
      const results = parseProducts(data);

      if (results.products[0]) {
        return results.products[0];
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
