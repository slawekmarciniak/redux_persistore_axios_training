import axios from "axios";
import {
  fetchRequested,
  addUser,
  fetchSucceded,
  fetchFailed,
} from "../redux/actions/usersActions";

interface ConfigType {
  method: "get";
  url: string;
  params: {
    results: number;
  };
}

const config: ConfigType = {
  method: "get",
  url: "https://randomuser.me/api/",
  params: {
    results: 10,
  },
};

export const getUsers = (addOnlyOneUser: boolean = false) => {
  return (dispatch: any) => {
    dispatch(fetchRequested());
    axios(config)
      .then((response: any) => {
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
