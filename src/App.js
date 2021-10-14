// REDUX
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import store from "./redux/store/store";
// COMPONENTS
import Home from "./components/Home";
import Users from "./components/Users/containers";
import Nav from "./components/Nav";
// ROUTER
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// STYLES
import "./App.css";

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
