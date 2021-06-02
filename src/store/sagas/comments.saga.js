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

export function* handleDeleteComment(action) {
  const { cardId, actionId } = action.payload;
  yield commentsApi.deleteComment(cardId, actionId).catch(function (err) {
    console.error("Augh, there was an error!", err.statusText);
  });
  yield put({ type: COMMENTS.GET_COMMENTS, payload: cardId });
}

export function* handleAddComment(action) {
  const { cardId, text } = action.payload;
  yield commentsApi.addComent(cardId, text).catch(function (err) {
    console.error("Augh, there was an error!", err.statusText);
  });
  yield put({ type: COMMENTS.GET_COMMENTS, payload: cardId });
}

export default function* watchComments() {
  yield takeEvery(COMMENTS.GET_COMMENTS, handleGetComments);
  yield takeEvery(COMMENTS.DELETE_COMMENT, handleDeleteComment);
  yield takeEvery(COMMENTS.ADD_COMMENT, handleAddComment);
}
