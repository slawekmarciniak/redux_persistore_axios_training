import { connect } from "react-redux";
import UsersList from "../Users/components/UsersList";
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
  return (
    <div>
      <button onClick={fetchData}>Load</button>
      {isLoading && <p>is loading..</p>}
      {isError && (
        <p>
          sorry, an error has occured: <span>{errorMessage}</span>
        </p>
      )}
      {users.length > 0 && (
        <>
          <button onClick={resetUsersList}>Reset</button>
          <button onClick={addUserToList}>Add</button>
        </>
      )}
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
  addUser: () => dispatch(getUsers(true)),
  resetUsers: () => dispatch(resetUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
