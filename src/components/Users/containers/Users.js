import { useEffect } from "react";
import { connect } from "react-redux";
import { getUsers } from "../../Home/redux";

import UsersList from "../components/UsersList";
import "../styles.css";

const Users = ({ getUsers, users, isLoading, isError, errorMessage }) => {
  useEffect(() => {
    if (users.length < 10) {
      getUsers();
    }
  }, []);
  return (
    <div>
      <h3>Users:</h3>
      {isError && (
        <p>
          sorry, an error has occured: <span>{errorMessage}</span>
        </p>
      )}
      {users.length > 0 && <UsersList users={users} />}
      {isLoading && <p>isLoading</p>}
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.users.users,
  isLoading: state.users.isLoading,
  isError: state.users.isError,
  errorMessage: state.users.errorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  getUsers: () => dispatch(getUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
