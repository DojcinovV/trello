import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers/root.reducer";
import rootSaga from "./sagas/root.saga";

const sagaMiddleware = createSagaMiddleware();
// array of all middlewares

const middlewares = [sagaMiddleware];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}
// Create the store with rootReducer and applied middlewares
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
// Start sagas
sagaMiddleware.run(rootSaga);
// Persist the store
export const persistor = persistStore(store);
export default store;
