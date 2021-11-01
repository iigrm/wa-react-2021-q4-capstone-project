import { useBaseRequest } from "./useBaseRequest";
import { API_BASE_URL } from "../utils/constants";
import { useQuery } from "react-query";
import { CategoryDataType } from "../models/CategoryDataType";
import { CategoryType } from "../models/CategoryType";

export const useFeaturedCategories = () => {
  const { data: ref, isLoading: isLoadingBaseRequest } = useBaseRequest();
  const getFeaturedCategories = async (signal: AbortSignal | undefined) => {
    const response = await fetch(
      `${API_BASE_URL}/documents/search?ref=${ref}&q=${encodeURIComponent(
        '[[at(document.type, "category")]]'
      )}&lang=en-us&pageSize=30`,
      {
        signal,
      }
    );
    const data: CategoryDataType = await response.json();
    if (data && data.results) {
      const categories: CategoryType[] = data.results.map((result) => ({
        imageUrl: result.data.main_image.url,
        href: result.href,
        name: result.data.name,
        id: result.id,
        slug: result.slugs[0],
      }));

      return categories;
    }
  };

  const { data, isLoading } = useQuery(
    "categories",
    async ({ signal }) => getFeaturedCategories(signal),
    {
      enabled: !!ref,
    }
  );

  return { data, isLoading: isLoading || isLoadingBaseRequest };
};
