"use server";

import { revalidate } from "@/shared/repository/server/shared/httpClient/revalidate";
import { generateActressesTag } from "./tag";
import { ActressSearchParams } from "../../../../../../back-end/src/actress/dto/actress.dto";

export const revalidateActresses = async (params: ActressSearchParams) => {
  return await revalidate({
    tag: generateActressesTag(params).toString(),
  });
};
