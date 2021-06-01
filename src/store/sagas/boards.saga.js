import { put, takeEvery } from "redux-saga/effects";
import { BOARDS } from "../../constants";
import { boardsApi } from "../../api";

export function* handleGetBoards(action) {
  yield put({ type: BOARDS.GET_BOARDS_STARTED });
  try {
    let result;
    yield boardsApi
      .getBoards()
      .then(function (data) {
        result = JSON.parse(data);
      })
      .catch(function (err) {
        console.error("Augh, there was an error!", err.statusText);
      });
    yield put({ type: BOARDS.GET_BOARDS_SUCCESSFULL, payload: result });
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
export function* handleGetSingleBoard(action) {
  let result;
  yield boardsApi
    .getBoard(action.payload)
    .then(function (data) {
      result = JSON.parse(data);
    })
    .catch(function (err) {
      console.log("Augh, there was an error", err.statusText);
    });
  yield put({
    type: BOARDS.GET_BOARD_SUCCESSFULL,
    payload: {
      name: result.name,
      background:
        result.prefs.backgroundImage === null
          ? result.prefs.backgroundColor
          : null,
      backgroundImage:
        result.prefs.backgroundImage === null
          ? null
          : result.prefs.backgroundImageScaled[8].url,
    },
  });
}

export default function* watchBoards() {
  yield takeEvery(BOARDS.GET_BOARDS, handleGetBoards);
  yield takeEvery(BOARDS.CREATE_BOARD, handleCreateBoard);
  yield takeEvery(BOARDS.GET_BOARD, handleGetSingleBoard);
}
