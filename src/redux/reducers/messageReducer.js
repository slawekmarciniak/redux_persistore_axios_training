import { SHOW_MESSAGE } from "../actions/messageActions";

const INITIAL_STATE = {
  message: [{ type: "", message: "" }],
};

export default function messageReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SHOW_MESSAGE:
      return (state = {
        ...state,
        message: [action.payload],
      });
    default:
      return state;
  }
}
