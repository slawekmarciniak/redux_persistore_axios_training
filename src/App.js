import { connect } from "react-redux";
import Home from "./components/Home";
import Users from "./components/Users/containers";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Message from "./components/Message";
import Contact from "./components/Contact/Contact";
import {
  messageTypeSelector,
  messageSelector,
  isLoadingSelector,
} from "./redux/selectors";

function App({ type, message }) {
  return (
    <Router>
      <div className="App">
        <Nav />
        {message && <Message type={type} message={message} />}
        <Switch>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  type: messageTypeSelector(state),
  message: messageSelector(state),
  isLoading: isLoadingSelector(state),
});

export default connect(mapStateToProps, null)(App);
