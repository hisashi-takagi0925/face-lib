import { ActressSearchParams } from "../../../../../../back-end/src/actress/dto/actress.dto";

export const GET_ACTRESSES_TAG = "actresses" as const;

export const generateActressesTag = (params: ActressSearchParams) => {
  return [GET_ACTRESSES_TAG, JSON.stringify(params)];
};
