"use server";

import { httpGet } from "@/shared/repository/server/shared/httpClient/get";
import {
  ProductResponse,
  ProductSearchParams,
} from "../../../../../../back-end/src/products/dto/product.dto";
import { generateProductsTag } from "./tag";

const baseUrl = "http://localhost:8080/products/";
const generateUrl = (params: ProductSearchParams) => {
  const url = new URL(baseUrl);
  return `${url.toString()}${params.actress_id}`;
};

export const getProducts = async (
  params: ProductSearchParams = {}
): Promise<ProductResponse | undefined> => {
  return await httpGet<ProductResponse>({
    tags: generateProductsTag(params),
    url: generateUrl(params),
  });
};
