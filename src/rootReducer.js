import { combineReducers } from "redux";
import usersReducer from "./components/Home/redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const usersPersistConfig = {
  key: "users",
  storage,
  blacklist: ["isError", "isLoading", "errorMessage"],
};

const rootReducer = combineReducers({
  users: persistReducer(usersPersistConfig, usersReducer),
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["users"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
