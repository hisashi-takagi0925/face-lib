"use server";

import { revalidate } from "@/shared/repository/server/shared/httpClient/revalidate";
import { generateActressDetailTag } from "./tag";

export const revalidateActressDetail = async (id: string) => {
  return await revalidate({
    tag: generateActressDetailTag(id).toString(),
  });
};
