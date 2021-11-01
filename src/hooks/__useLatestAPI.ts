import { useState, useEffect } from "react";
import { RefsEntity, ApiRefType } from "../models/ApiRefType";
import { API_BASE_URL } from "../utils/constants";

const INITIAL_API_METADATA = { ref: null, isLoading: true };

export function useLatestAPI() {
  const [apiMetadata, setApiMetadata] = useState<{
    ref: RefsEntity | null;
    isLoading: boolean;
  }>(() => INITIAL_API_METADATA);

  useEffect(() => {
    const controller = new AbortController();

    async function getAPIMetadata() {
      try {
        setApiMetadata(INITIAL_API_METADATA);

        const response = await fetch(API_BASE_URL, {
          signal: controller.signal,
        });
        const json: ApiRefType = await response.json();

        const { refs } = json;

        setApiMetadata({ ref: refs ? refs[0] : null, isLoading: false });
      } catch (err) {
        setApiMetadata({ ref: null, isLoading: false });
        console.error(err);
      }
    }

    getAPIMetadata();

    return () => {
      controller.abort();
    };
  }, []);

  return apiMetadata;
}
