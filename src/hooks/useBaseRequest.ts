import { useQuery } from "react-query";
import { ApiRefType } from "../models/ApiRefType";
import { API_BASE_URL } from "../utils/constants";

export const useBaseRequest = () => {
  return useQuery("baseRequest", async ({ signal }) => {
    const response = await fetch(API_BASE_URL, {
      signal,
    });
    const json: ApiRefType = await response.json();
    if (json.refs && json.refs[0]) {
      return json.refs[0].ref;
    } else {
      throw new Error("Lastest ref not found");
    }
  });
};
