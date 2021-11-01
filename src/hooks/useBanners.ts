import { useBaseRequest } from "./useBaseRequest";
import { API_BASE_URL } from "../utils/constants";
import { useQuery } from "react-query";
import { FeaturedBannersType } from "../models/FeaturedBannersType";

export const useBanners = () => {
  const { data: ref, isLoading: isLoadingBaseRequest } = useBaseRequest();
  const getFeaturedBanners = async (signal: AbortSignal | undefined) => {
    const response = await fetch(
      `${API_BASE_URL}/documents/search?ref=${ref}&q=${encodeURIComponent(
        '[[at(document.type, "banner")]]'
      )}&lang=en-us&pageSize=5`,
      {
        signal,
      }
    );
    const data: FeaturedBannersType = await response.json();
    if (data) {
      return data.results?.map((result) => ({
        imageUrl: result.data.main_image.url,
        href: result.href,
        title: result.data.title,
        description:
          (result.data.description && result.data.description[0].text) || "",
      }));
    }
  };
  const { data, isLoading } = useQuery(
    "banners",
    async ({ signal }) => getFeaturedBanners(signal),
    {
      enabled: !!ref,
    }
  );

  return { data, isLoading: isLoading || isLoadingBaseRequest };
};
