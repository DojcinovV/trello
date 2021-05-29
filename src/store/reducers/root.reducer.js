import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import theme from "./theme.reducer";
import boards from "./boards.reducer";
const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};

const rootReducer = combineReducers({ theme, boards });

export default persistReducer(persistConfig, rootReducer);
