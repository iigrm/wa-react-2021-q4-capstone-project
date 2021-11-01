import { useState, useEffect } from "react";
import { BannerType } from "../models/BannerType";
import { FeaturedBannersType } from "../models/FeaturedBannersType";
import { API_BASE_URL } from "../utils/constants";
import { useLatestAPI } from "./__useLatestAPI";

export function useFeaturedBanners() {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [featuredBanners, setFeaturedBanners] = useState<{
    data?: BannerType[];
    isLoading: boolean;
  }>(() => ({
    data: undefined,
    isLoading: true,
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getFeaturedBanners() {
      try {
        setFeaturedBanners({ data: undefined, isLoading: true });

        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${
            apiRef?.ref
          }&q=${encodeURIComponent(
            '[[at(document.type, "banner")]]'
          )}&lang=en-us&pageSize=5`,
          {
            signal: controller.signal,
          }
        );
        const data: FeaturedBannersType = await response.json();
        if (data) {
          const parsedBanners = data.results?.map((result) => ({
            imageUrl: result.data.main_image.url,
            href: result.href,
            title: result.data.title,
            description:
              (result.data.description && result.data.description[0].text) ||
              "",
          }));
          setFeaturedBanners({ data: parsedBanners, isLoading: false });
        }
        setFeaturedBanners({ data: undefined, isLoading: false });
      } catch (err) {
        setFeaturedBanners({ data: undefined, isLoading: false });
        console.error(err);
      }
    }

    getFeaturedBanners();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading]);

  return featuredBanners;
}
