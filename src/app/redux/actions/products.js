import {
  FETCH_PRODUCT_REQUESTED,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE
} from "../actionType/productType";

export const productRequest = (keyword, page) => ({
  type: FETCH_PRODUCT_REQUESTED,
  keyword,
  page
});

export const productSuccess = products => ({
  type: FETCH_PRODUCT_SUCCESS,
  products
});

export const productFail = error => ({
  type: FETCH_PRODUCT_FAILURE,
  error
});
