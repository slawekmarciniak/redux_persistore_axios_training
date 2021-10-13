import axios from "axios";
const GET_USERS_REQUESTED = "GET_USERS_REQUESTED";
const GET_USERS_SUCCEDED = "GET_USERS_SUCCEDED";
const GET_USERS_FAILED = "GET_USERS_FAILED";
const RESET_USERS = "RESET_USERS";
const ADD_USER_TO_LIST = "ADD_USER_TO_LIST";

export const fetchRequested = () => ({ type: GET_USERS_REQUESTED });
export const fetchSucceded = (data) => ({
  type: GET_USERS_SUCCEDED,
  playload: data,
});
const fetchFailed = () => ({ type: GET_USERS_FAILED });
export const resetUsers = () => ({ type: RESET_USERS });
export const addUser = () => ({ type: ADD_USER_TO_LIST });

const INITIAL_STATE = {
  users: [],
  isLoading: false,
  isError: false,
};

const config = {
  method: "get",
  url: "https://randomuser.me/api/",
  params: {
    results: 10,
  },
};

export const getUsers = () => {
  return (dispatch) => {
    dispatch(fetchRequested());
    axios(config)
      .then((response) => {
        dispatch(fetchSucceded(response.data.results));
      })
      .catch((err) => dispatch(fetchFailed()));
  };
};

export default function usersReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_USERS_REQUESTED:
      return (state = {
        ...state,
        isLoading: true,
        isError: false,
      });
    case GET_USERS_SUCCEDED:
      return (state = {
        ...state,
        users: action.playload,
        isLoading: false,
        isError: false,
      });
    case GET_USERS_FAILED:
      return (state = {
        ...state,
        isLoading: false,
        isError: true,
      });
    case RESET_USERS:
      return (state = {
        ...state,
        users: [],
      });
    default:
      return state;
  }
}
