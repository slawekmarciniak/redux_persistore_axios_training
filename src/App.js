// REDUX
import { Provider } from "react-redux";
import persistedReducer from "./rootReducer";
import { applyMiddleware, createStore, compose } from "redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import thunk from "redux-thunk";
// COMPONENTS
import Home from "./components/Home";
import Users from "./components/Users/containers";
import Nav from "./components/Nav";
// ROUTER
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// STYLES
import "./App.css";

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middleware))
);
const persistor = persistStore(store);

function App() {
  return (
    <Router>
      <div className="App">
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Nav />
            <Switch>
              <Route path="/users">
                <Users />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </PersistGate>
        </Provider>
      </div>
    </Router>
  );
}

export default App;
