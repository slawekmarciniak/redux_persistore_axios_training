import thunk from "redux-thunk";
import persistedReducer from "../reducers/rootReducer";
import { applyMiddleware, createStore, compose } from "redux";

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
