import { connect } from "react-redux";
import UsersList from "../Users/components/UsersList";
import { getUsers, resetUsers } from "./redux";

const Home = ({ getUsers, addUser, users, isLoading, resetUsers }) => {
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
      <div>
        <button onClick={fetchData}>Load</button>
        <button onClick={resetUsersList}>Reset</button>
        <button onClick={addUserToList}>Add</button>
      </div>
      <div>{isLoading && <p>is loading..</p>}</div>
      <div>{users && <UsersList users={users} />}</div>
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
  addUser: () => dispatch(getUsers(true)),
  resetUsers: () => dispatch(resetUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);