import { useEffect } from "react";
import { connect } from "react-redux";
import { getUsers } from "../../Home/redux";

import UsersList from "../components/UsersList";
import "../styles.css";

const Users = ({ getUsers, users, isLoading }) => {
  useEffect(() => {
    if (users.length < 10) {
      getUsers();
    }
  }, []);
  return (
    <div>
      <h1>Users:</h1>
      {users && <UsersList users={users} />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.users.users,
  isLoading: state.users.isLoading,
  isError: state.users.isError,
});

const mapDispatchToProps = (dispatch) => ({
  getUsers: () => dispatch(getUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
