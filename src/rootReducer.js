import { combineReducers } from "redux";
import usersReducer from "./components/Home/redux";

const rootReducer = combineReducers({
  users: usersReducer,
});

export default rootReducer;
