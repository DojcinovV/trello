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
export function* handleUpdateBoardName(action) {
  const { id, name } = action.payload;
  yield boardsApi.updateBoardName(id, name).catch(function (err) {
    console.log("Augh, there was an error", err.statusText);
  });
  yield put({ type: BOARDS.GET_BOARD, payload: id });
}

export function* handleGetListsOnABoard(action) {
  let result = [];
  yield boardsApi
    .getListsOnABoard(action.payload)
    .then(function (data) {
      result = JSON.parse(data);
    })
    .catch(function (err) {
      console.log("Augh, there was an error", err.statusText);
    });
  yield put({
    type: BOARDS.GET_LISTS_ON_A_BOARD_SUCCESSFULL,
    payload: result,
  });
}

export function* handleCreateListOnABoard(action) {
  const { id, name } = action.payload;
  yield boardsApi.createListOnABoard(id, name).catch(function (err) {
    console.log("Auth, there was an error", err.statusText);
  });
  yield put({ type: BOARDS.GET_LISTS_ON_A_BOARD, payload: id });
}

export function* handleCreateCardOnAList(action) {
  const { name, listId } = action.payload;
  yield boardsApi.createCardOnAList(listId, name).catch(function (err) {
    console.log("Auth, there was an error", err.statusText);
  });
}

export function* handleUpdateListName(action) {
  const { name, listId } = action.payload;
  yield boardsApi.updateListName(listId, name).catch(function (err) {
    console.log("Auth, there wasan eror", err.statusText);
  });
}

export function* handleDeleteList(action) {
  const { listId, boardId } = action.payload;
  yield boardsApi.deleteList(listId).catch(function (err) {
    console.log("Auth, there wasan eror", err.statusText);
  });
  yield put({ type: BOARDS.GET_LISTS_ON_A_BOARD, payload: boardId });
}
export function* handleDeleteCard(action) {
  const { cardId, boardId } = action.payload;
  yield boardsApi.deleteCard(cardId).catch(function (err) {
    console.log("Auth, there wasan eror", err.statusText);
  });
  yield put({ type: BOARDS.GET_LISTS_ON_A_BOARD, payload: boardId });
}

export default function* watchBoards() {
  yield takeEvery(BOARDS.GET_BOARDS, handleGetBoards);
  yield takeEvery(BOARDS.CREATE_BOARD, handleCreateBoard);
  yield takeEvery(BOARDS.GET_BOARD, handleGetSingleBoard);
  yield takeEvery(BOARDS.UPDATE_BOARD_NAME, handleUpdateBoardName);
  yield takeEvery(BOARDS.GET_LISTS_ON_A_BOARD, handleGetListsOnABoard);
  yield takeEvery(BOARDS.CREATE_LIST_ON_A_BOARD, handleCreateListOnABoard);
  yield takeEvery(BOARDS.UPDATE_LIST_NAME, handleUpdateListName);
  yield takeEvery(BOARDS.UPDATE_LIST_NAME, handleUpdateListName);
  yield takeEvery(BOARDS.DELETE_LIST, handleDeleteList);
  yield takeEvery(BOARDS.DELETE_CARD, handleDeleteCard);
}
