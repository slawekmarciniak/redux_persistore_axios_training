import { connect } from "react-redux";
import UsersList from "../Users/components/UsersList";
import Button from "@mui/material/Button";
import { getUsers } from "../../api/usersApi";
import { resetUsers } from "../../redux/actions/usersActions";
import { showMessage } from "../../redux/actions/messageActions";
import {
  userSelector,
  isLoadingSelector,
  isErrorSelector,
  errorMessageSelector,
} from "../../redux/selectors";

const Home = ({
  getUsers,
  addUser,
  users,
  isLoading,
  resetUsers,
  isError,
  errorMessage,
  showMessage,
}) => {
  const fetchData = () => {
    showMessage("success", "loading");
    getUsers();
    if (isError) {
      showMessage("error", errorMessage);
    }
  };
  const resetUsersList = () => {
    showMessage("warning", "users list is cleared");
    setTimeout(() => {
      resetUsers();
    }, 1000);
  };
  const addUserToList = () => {
    showMessage("info", "adding user");
    addUser();
  };

  const isUsersListReady = users.length > 0;
  return (
    <div>
      <div className="buttonsContainer">
        <Button variant="contained" color="secondary" onClick={fetchData}>
          Load
        </Button>
        {isUsersListReady && (
          <>
            <Button variant="contained" color="error" onClick={resetUsersList}>
              Reset
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={addUserToList}
            >
              Add
            </Button>{" "}
          </>
        )}
      </div>
      {isUsersListReady && <UsersList users={users} />}
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
  addUser: () => dispatch(getUsers(true)),
  resetUsers: () => dispatch(resetUsers()),
  showMessage: (type, message) =>
    dispatch(
      showMessage({
        type,
        message,
      })
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
