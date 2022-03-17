import { call, takeLatest, put } from "redux-saga/effects";
//import axios from "axios";
import { fetchApi } from "../services/api";
import { fetchDataSuccess, fetchDataFailure } from "../actions";
function* asyncFetchRequest(action) {
  try {
    const user = yield call(fetchApi, action);
    yield put(fetchDataSuccess(user));
  } catch (error) {
    console.log(error);
  }
}
export function* watchFetchDataSaga() {
  yield takeLatest("SEND_REQUEST", asyncFetchRequest);
}
