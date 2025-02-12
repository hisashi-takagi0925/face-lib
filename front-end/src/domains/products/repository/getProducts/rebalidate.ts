"use server";

import { revalidate } from "@/shared/repository/server/shared/httpClient/revalidate";
import { generateProductsTag } from "./tag";
import { ProductSearchParams } from "../../../../../../back-end/src/products/dto/product.dto";

export const revalidateProducts = async (params: ProductSearchParams) => {
  return await revalidate({
    tag: generateProductsTag(params).toString(),
  });
};
