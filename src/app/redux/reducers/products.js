import {
  FETCH_PRODUCT_REQUESTED,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE
} from "../actionType/productType";

const initialState = {
  products: [],
  error: null
};

export default function products(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCT_REQUESTED:
    return {
        isLoading: true,
      }
    case FETCH_PRODUCT_SUCCESS:
    return {
      ...state,
      products: action.products,
      isLoading: false,
    };
    case FETCH_PRODUCT_FAILURE:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}
