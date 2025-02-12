import { ProductSearchParams } from "../../../../../../back-end/src/products/dto/product.dto";

export const GET_PRODUCTS_TAG = "products" as const;

export const generateProductsTag = (params: ProductSearchParams) => {
  return [GET_PRODUCTS_TAG, JSON.stringify(params)];
};
