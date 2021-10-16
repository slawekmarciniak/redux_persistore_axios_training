import { combineReducers } from "redux";
import usersReducer from "./userReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import messageReducer from "./messageReducer";

const usersPersistConfig = {
  key: "users",
  storage,
  blacklist: ["isError", "isLoading", "errorMessage"],
};

const rootReducer = combineReducers({
  users: persistReducer(usersPersistConfig, usersReducer),
  message: messageReducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["users", "message"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
