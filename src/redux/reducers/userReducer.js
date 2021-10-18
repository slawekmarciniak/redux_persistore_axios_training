import {
  GET_USERS_REQUESTED,
  GET_USERS_SUCCEDED,
  GET_USERS_FAILED,
  RESET_USERS,
  ADD_USER_TO_LIST,
} from "../actions/usersActions";

const INITIAL_STATE = {
  users: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
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
        users: action.payload,
        isLoading: false,
        isError: false,
        errorMessage: "",
      });
    case GET_USERS_FAILED:
      return (state = {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
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
        users: [action.payload, ...state.users],
        isLoading: false,
        isError: false,
        errorMessage: "",
      });
    default:
      return state;
  }
}
