import { connect } from "react-redux";
import UsersList from "../Users/components/UsersList";
import Button from "@mui/material/Button";
import { getUsers, resetUsers } from "./redux";

const Home = ({
  getUsers,
  addUser,
  users,
  isLoading,
  resetUsers,
  isError,
  errorMessage,
}) => {
  const fetchData = () => {
    getUsers();
  };
  const resetUsersList = () => {
    resetUsers();
  };
  const addUserToList = () => {
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
      {isLoading && <p>is loading..</p>}
      {isError && (
        <p>
          sorry, an error has occured: <span>{errorMessage}</span>
        </p>
      )}
      {isUsersListReady && <UsersList users={users} />}
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
  addUser: () => dispatch(getUsers(true)),
  resetUsers: () => dispatch(resetUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
