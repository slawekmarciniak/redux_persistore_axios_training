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
const fetchFailed = (data) => ({ type: GET_USERS_FAILED, playload: data });
export const resetUsers = () => ({ type: RESET_USERS });
export const addUser = (data) => ({ type: ADD_USER_TO_LIST, playload: data });

const INITIAL_STATE = {
  users: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

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

export default function usersReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_USERS_REQUESTED:
      return (state = {
        ...state,
        isLoading: true,
        isError: false,
        errorMessage: "",
      });
    case GET_USERS_SUCCEDED:
      return (state = {
        ...state,
        users: action.playload,
        isLoading: false,
        isError: false,
        errorMessage: "",
      });
    case GET_USERS_FAILED:
      return (state = {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.playload,
      });
    case RESET_USERS:
      return (state = {
        ...state,
        users: [],
        errorMessage: "",
      });
    case ADD_USER_TO_LIST:
      return (state = {
        ...state,
        users: [action.playload, ...state.users],
        isLoading: false,
        isError: false,
        errorMessage: "",
      });
    default:
      return state;
  }
}
