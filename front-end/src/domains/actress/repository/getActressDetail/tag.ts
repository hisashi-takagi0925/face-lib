export const GET_ACTRESS_DETAIL_TAG = "actressDetail" as const;

export const generateActressDetailTag = (id: string) => {
  return [GET_ACTRESS_DETAIL_TAG, id];
};
