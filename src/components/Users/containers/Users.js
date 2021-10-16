import { useEffect } from "react";
import { connect } from "react-redux";
import { getUsers } from "../../../api/usersApi";
import { showMessage } from "../../../redux/actions/messageActions";

import UsersList from "../components/UsersList";
import "../styles.css";

const Users = ({
  getUsers,
  users,
  isLoading,
  isError,
  errorMessage,
  showMessage,
}) => {
  useEffect(() => {
    if (users.length < 10) {
      getUsers();
    }
  }, [getUsers, users.length]);

  if (isLoading) {
    showMessage("info", "loading");
  } else if (isError) {
    showMessage("danger", errorMessage);
  } else showMessage("", "");

  return (
    <div>
      <h4 className="users">Users:</h4>
      {users.length > 0 && <UsersList users={users} />}
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
  showMessage: (type, message) =>
    dispatch(
      showMessage({
        type,
        message,
      })
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
