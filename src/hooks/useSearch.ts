import { useBaseRequest } from "./useBaseRequest";
import { API_BASE_URL } from "../utils/constants";
import { useQuery } from "react-query";
import { ProductsDataType } from "../models/ProductsDataType";
import { parseProducts } from "../utils/products";

export const useSearch = (searchTerm: string, page: number) => {
  const { data: ref, isLoading: isLoadingBaseRequest } = useBaseRequest();
  const getProducts = async (signal: AbortSignal | undefined) => {
    if (!searchTerm) return;
    const response = await fetch(
      `${API_BASE_URL}/documents/search?ref=${ref}&q=${encodeURIComponent(
        '[[at(document.type, "product")]]'
      )}&q=${encodeURIComponent(
        `[[fulltext(document, "${searchTerm}")]]`
      )}&lang=en-us&pageSize=12&page=${page}`,
      {
        signal,
      }
    );
    const data: ProductsDataType = await response.json();
    if (data && data.results) {
      return parseProducts(data);
    }
  };

  const { data, isLoading } = useQuery(
    ["search_products", searchTerm],
    async ({ signal }) => getProducts(signal),
    {
      enabled: !!ref,
    }
  );

  return { data, isLoading: isLoading || isLoadingBaseRequest };
};
