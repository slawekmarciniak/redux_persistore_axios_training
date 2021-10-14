import axios from "axios";
import {
  fetchRequested,
  addUser,
  fetchSucceded,
  fetchFailed,
} from "../actions/usersActions";

const config = {
  method: "get",
  url: "https://randomuser.me/api/",
  params: {
    results: 10,
  },
};

export const getUsers = (addOnlyOneUser = false) => {
  return (dispatch) => {
    dispatch(fetchRequested());
    axios(config)
      .then((response) => {
        if (addOnlyOneUser) {
          dispatch(addUser(response.data.results[0]));
          return;
        }
        dispatch(fetchSucceded(response.data.results));
      })
      .catch((err) => {
        dispatch(fetchFailed(err.message));
      });
  };
};
