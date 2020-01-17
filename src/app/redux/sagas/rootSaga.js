import { call } from 'redux-saga/effects'
import watchFetchData from './productSaga';

export default function* rootSaga() {
  yield call(watchFetchData)
}
