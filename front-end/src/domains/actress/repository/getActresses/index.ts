"use server";

import { httpGet } from "@/shared/repository/server/shared/httpClient/get";
import {
  Actresses,
  ActressSearchParams,
} from "../../../../../../back-end/src/actress/dto/actress.dto";
import { generateActressesTag } from "./tag";

const baseUrl = "http://localhost:8080/actress/";
const generateUrl = (params: ActressSearchParams) => {
  const url = new URL(baseUrl);
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.set(key, value.toString());
  });
  return url.toString();
};

export const getActresses = async (
  params: ActressSearchParams = {}
): Promise<Actresses | undefined> => {
  return await httpGet<Actresses>({
    tags: generateActressesTag(params),
    url: generateUrl(params),
  });
};
