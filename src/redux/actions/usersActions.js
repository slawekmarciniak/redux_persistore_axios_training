export const GET_USERS_REQUESTED = "GET_USERS_REQUESTED";
export const GET_USERS_SUCCEDED = "GET_USERS_SUCCEDED";
export const GET_USERS_FAILED = "GET_USERS_FAILED";
export const RESET_USERS = "RESET_USERS";
export const ADD_USER_TO_LIST = "ADD_USER_TO_LIST";

export const fetchRequested = () => ({ type: GET_USERS_REQUESTED });
export const fetchSucceded = (data) => ({
  type: GET_USERS_SUCCEDED,
  payload: data,
});
export const fetchFailed = (data) => ({
  type: GET_USERS_FAILED,
  payload: data,
});
export const resetUsers = () => ({ type: RESET_USERS });
export const addUser = (data) => ({ type: ADD_USER_TO_LIST, payload: data });
