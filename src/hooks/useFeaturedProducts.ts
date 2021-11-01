import { useBaseRequest } from "./useBaseRequest";
import { API_BASE_URL } from "../utils/constants";
import { useQuery } from "react-query";
import { ProductsDataType } from "../models/ProductsDataType";

export const useFeaturedProducts = () => {
  const { data: ref, isLoading: isLoadingBaseRequest } = useBaseRequest();
  const getFeaturedProducts = async (signal: AbortSignal | undefined) => {
    const response = await fetch(
      `${API_BASE_URL}/documents/search?ref=${ref}&q=${encodeURIComponent(
        '[[at(document.type, "product")]]'
      )}q=${encodeURIComponent(
        '[[at(document.type, "Featured")]]'
      )}&lang=en-us&pageSize=16`,
      {
        signal,
      }
    );
    const data: ProductsDataType = await response.json();
    if (data && data.results) {
      return data.results?.map((result) => ({
        id: result.id,
        name: result.data.name,
        sku: result.data.sku,
        imageUrl: result.data.mainimage.url,
        category: result.data.category.id,
        stock: result.data.stock,
        price: result.data.price,
      }));
    }
  };

  const { data, isLoading } = useQuery(
    "featured_products",
    async ({ signal }) => getFeaturedProducts(signal),
    {
      enabled: !!ref,
    }
  );

  return { data, isLoading: isLoading || isLoadingBaseRequest };
};
