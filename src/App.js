import { connect } from "react-redux";
import Home from "./components/Home";
import Users from "./components/Users/containers";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Message from "./components/Message";

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
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  type: state.message.message[0].type,
  message: state.message.message[0].message,
  isLoading: state.users.isLoading,
});

export default connect(mapStateToProps)(App);
