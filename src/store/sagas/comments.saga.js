import { put, takeEvery } from "redux-saga/effects";
import { COMMENTS } from "../../constants";
import { commentsApi } from "../../api";

export function* handleGetComments(action) {
  let result;
  yield commentsApi
    .getComments(action.payload)
    .then(function (data) {
      result = JSON.parse(data);
    })
    .catch(function (err) {
      console.error("Augh, there was an error!", err.statusText);
    });
  yield put({ type: COMMENTS.GET_COMMENTS_SUCCESSFULL, payload: result });
}

export default function* watchComments() {
  yield takeEvery(COMMENTS.GET_COMMENTS, handleGetComments);
}
