import { all } from "redux-saga/effects";
import watchBoards from "./boards.saga";
import watchComments from "./comments.saga";
export default function* rootSaga() {
  yield all([watchBoards(), watchComments()]);
}
