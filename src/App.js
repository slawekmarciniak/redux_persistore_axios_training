// import { connect } from "react-redux";
import Home from "./components/Home";
import Users from "./components/Users/containers";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Message from "./components/Message";

function App() {
  const messageTypeSelector = (state) =>
    state.message.message[0] ? state.message.message[0].type : null;
  const messageSelector = (state) =>
    state.message.message[0].message ? state.message.message[0].message : null;

  return (
    <Router>
      <div className="App">
        <Nav />
        {messageSelector && (
          <Message type={messageTypeSelector} message={messageSelector} />
        )}
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

// const messageTypeSelector = (state) =>
//   state.message.message[0] ? state.message.message[0].type : null;
// const messageSelector = (state) =>
//   state.message.message[0].message ? state.message.message[0].message : null;
// const isLoadingSelector = (state) => state.users.isLoading;

// const mapStateToProps = (state) => ({
//   type: messageTypeSelector(state),
//   message: messageSelector(state),
//   isLoading: isLoadingSelector(state),
// });

export default App;
