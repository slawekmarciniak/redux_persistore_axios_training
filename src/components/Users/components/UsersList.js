import User from "./User";

const UsersList = ({ users }) => {
  return (
    <div className="usersListContainer">
      <ul className="usersList">
        {users.map((user) => (
          <User
            key={user.login.uuid}
            name={user.name.first}
            last={user.name.last}
          />
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
