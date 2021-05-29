import { put, takeEvery } from "redux-saga/effects";
import { BOARDS } from "../../constants";
import { boardsApi } from "../../api";

export function* handleGetBoards(action) {
  yield put({ type: BOARDS.GET_BOARDS_STARTED });
  try {
    let data;
    yield boardsApi.getBoards().then(function (result) {
      data = result.data;
    });
    yield put({ type: BOARDS.GET_BOARDS_SUCCESSFULL, payload: data });
  } catch (e) {
    console.log("error", e);
  }
}

export default function* watchBoards() {
  yield takeEvery(BOARDS.GET_BOARDS, handleGetBoards);
}
