"use server";

import { httpGet } from "@/shared/repository/server/shared/httpClient/get";
import { ActressDetail } from "../../../../../../back-end/src/actress/dto/actress.dto";
import { generateActressDetailTag } from "./tag";

const baseUrl = "http://localhost:8080/actress/";

export const getActressDetail = async (
  id: string
): Promise<ActressDetail | undefined> => {
  console.log("url", `${baseUrl}${id}`);
  return await httpGet<ActressDetail>({
    tags: generateActressDetailTag(id),
    url: `${baseUrl}${id}`,
  });
};
