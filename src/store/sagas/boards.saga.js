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
    yield put({
      type: BOARDS.GET_BOARDS_FAILED,
      payload: e?.response?.data?.message ?? "Error fetching boards",
    });
  }
}

export function* handleCreateBoard(action) {
  try {
    yield boardsApi.createBoard(action.payload);
    yield put({ type: BOARDS.CREATE_BOARD_SUCCESSFULL });
    yield put({ type: BOARDS.GET_BOARDS });
  } catch (e) {
    yield put({
      type: BOARDS.CREATE_BOARD_FAILED,
      payload: e?.response?.data?.message ?? "Error Creating board",
    });
  }
}

export default function* watchBoards() {
  yield takeEvery(BOARDS.GET_BOARDS, handleGetBoards);
  yield takeEvery(BOARDS.CREATE_BOARD, handleCreateBoard);
}
