import { all } from "redux-saga/effects";
import watchBoards from "./boards.saga";

export default function* rootSaga() {
  yield all([watchBoards()]);
}
