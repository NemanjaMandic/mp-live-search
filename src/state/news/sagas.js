import { all, takeEvery, put } from "redux-saga/effects";
import { fetchSearchResultsAPI } from "../../services/api";
import * as actions from "./actions";

export function* fetchSearchResults$({ payload }) {
  try {
    const response = yield fetchSearchResultsAPI(payload);
    yield put(actions.getSearchResultsSuccess(response.data));
  } catch (error) {
    yield put(actions.getSearchResultsFail(error));
  }
}

export default function*() {
  yield all([takeEvery(actions.getSearchResults, fetchSearchResults$)]);
}
