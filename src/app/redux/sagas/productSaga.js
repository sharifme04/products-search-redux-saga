import { call, put, delay, takeLatest } from "redux-saga/effects";
import { FETCH_PRODUCT_REQUESTED } from "../actionType/productType";
import { productSuccess, productFail } from "../actions/products";
import { api } from "../services/services";

function* fetchProducts(action) {
  console.log("2ms second waiting started now");
  yield delay(200);
  console.log("2ms second waiting Ended now");
  const { products, error } = yield call(api.fetchData, action);
  if (products) yield put(productSuccess(products));
  else yield put(productFail(error));
}

export default function* watchFetchData() {
  yield takeLatest(FETCH_PRODUCT_REQUESTED, fetchProducts);
}
