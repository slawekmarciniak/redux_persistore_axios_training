import { useEffect } from "react";
import { connect } from "react-redux";
import { getUsers } from "../../../api/usersApi";
import { showMessage } from "../../../redux/actions/messageActions";
import {
  userSelector,
  isLoadingSelector,
  isErrorSelector,
  errorMessageSelector,
} from "../../../redux/selectors";
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
    if (users.length < 1) {
      getUsers();
    }
  }, [getUsers, users, isError]);

  if (isLoading) {
    showMessage("success", "loading");
  } else if (isError) {
    showMessage("error", errorMessage);
  }
  return (
    <div>
      <h4 className="users">Users:</h4>
      {users && <UsersList users={users} />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: userSelector(state),
  isLoading: isLoadingSelector(state),
  isError: isErrorSelector(state),
  errorMessage: errorMessageSelector(state),
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
